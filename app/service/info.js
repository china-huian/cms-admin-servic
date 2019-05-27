/* eslint-disable linebreak-style */
'use strict';
const Service = require('egg').Service;
const moment = require('moment');
const assert = require('assert');
const { BusinessError } = require('naf-core').Error;
class InfoService extends Service {
  async add({ name, key, value }) {
    assert(name, '功能名称不能为空');
    assert(key, '属性名不能为空');
    assert(value, '属性值不能为空');
    const { Info: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.create({ name, key, value, use: '', time });
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async update({ id, name, key, value }) {
    assert(id, 'ID不能为空');
    assert(name, '功能名称不能为空');
    assert(key, '属性名不能为空');
    assert(value, '属性值不能为空');
    const { Info: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.findById(id).update({ name, key, value, use: '', time });
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async delete({ id }) {
    assert(id, 'ID不能为空');
    const { Info: model } = this.ctx.model;
    try {
      const data = await model.findById(id).remove();
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async query({ skip, limit }) {
    assert(skip, '页数不能为空');
    assert(limit, '条数不能为空');
    const { Info: model } = this.ctx.model;
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
    const { Info: model } = this.ctx.model;
    try {
      const data = await model.findById(id);
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
}
module.exports = InfoService;
