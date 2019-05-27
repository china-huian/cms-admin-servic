/* eslint-disable linebreak-style */
'use strict';
const Service = require('egg').Service;
const moment = require('moment');
const assert = require('assert');
const { BusinessError } = require('naf-core').Error;
class NavService extends Service {
  async add({ name, type, binding, index, url, children }) {
    assert(name, '名称不能为空');
    assert(index, '排序不能为空');
    const datas = { name, type, binding, children, index, use: '' };
    if (type === '2') {
      if (url && url !== null) {
        datas.url = url;
      } else {
        throw new BusinessError(-1004, '类型为链接，url不能为空');
      }
    }
    const { Nav: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.create({ ...datas, time });
      return data;
    } catch (error) {
      console.log(error);
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async update({ id, name, type, binding, index, children, url }) {
    assert(name, '名称不能为空');
    assert(index, '排序不能为空');
    if (!children) {
      throw new BusinessError(-1002, '子菜单字段不存在');
    } else {
      if (children.length > 0) {
        if (binding !== null) {
          throw new BusinessError(-1003, '子菜单存在，绑定id应该为空');
        }
      }
    }
    if (type === '2') {
      if (!url && url == null) {
        throw new BusinessError(-1004, '类型为链接，url不能为空');
      }
    }
    const datas = { name, type, binding, index, children, use: '', url };
    const { Nav: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.findById(id).update({ ...datas, time });
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async delete({ id }) {
    assert(id, 'ID不能为空');
    const { Nav: model } = this.ctx.model;
    try {
      const data = await model.findById(id).remove();
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async query() {
    const { Nav: model } = this.ctx.model;
    try {
      const data = await model.find().sort({ index: 1 });
      return { data };
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async fetch({ id }) {
    assert(id, 'ID不能为空');
    const { Nav: model } = this.ctx.model;
    try {
      const data = await model.findById(id);
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
}
module.exports = NavService;
