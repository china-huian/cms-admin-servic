/* eslint-disable linebreak-style */
'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const { sep } = require('path');
const moment = require('moment');
const { BusinessError } = require('naf-core').Error;
const assert = require('assert');
class FileService extends Service {
  async upload(file) {
    const { Files: model } = this.ctx.model;
    const myres = new Date().getTime(); // 获取毫秒数当做文件名避免相同
    const position = file.filename.indexOf('.');
    const ending = file.filename.length;
    const mime = file.filename.slice(position + 1, ending);
    const address = path.join(this.app.baseDir, '/app/public/', myres + '.' + mime);
    try {
      fs.copyFile(file.filepath, address, function(err) {
        if (err) {
          throw new BusinessError(-1002, '上传失败');
        }
      });
      const url = '/public/' + myres + '.' + mime;
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.create({ url, name: myres, time });
      return data;
    } catch (error) {
      throw new BusinessError(-1, '数据库错误');
    }
  }
  async download({ name }) {
    try {
      const { ctx } = this;
      ctx.set('content-type', 'application/octet-stream');
      ctx.set('content-disposition', 'attachment;filename=' + name);
      const data = fs.createReadStream(`${ctx.app.baseDir}${sep}public/img${sep}${name}`);
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '下载错误');
    }
  }
  async delete({ name }) {
    assert(name, '名称不能为空');
    try {
      const { File: model } = this.ctx.model;
      const data = await model.find(name).remove();
      fs.unlink(name, err => {
        if (err) throw new BusinessError(-1002, '删除失败');
        return data;
      });
    } catch (error) {
      throw new BusinessError(-1001, '删除错误');
    }
  }
  async query({ skip, limit }) {
    assert(skip, '页数不能为空');
    assert(limit, '条数不能为空');
    const { File: model } = this.ctx.model;
    try {
      const Pagesize = (skip - 1) * limit;
      const totals = await model.find();
      const total = totals.length;
      const data = await model.find().limit(limit).skip(Pagesize);
      return { data, total };
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async fetch({ id }) {
    assert(id, 'ID不能为空');
    const { File: model } = this.ctx.model;
    try {
      const data = await model.findById(id);
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
}
module.exports = FileService;
