/* eslint-disable linebreak-style */
'use strict';
const Service = require('egg').Service;
const moment = require('moment');
const assert = require('assert');
const { BusinessError } = require('naf-core').Error;
class PageService extends Service {
  async add({ name, content }) {
    assert(name, '名称不能为空');
    assert(content, '内容不能为空');
    const { Page: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.create({ name, content, use: '', time });
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async update({ id, name, content }) {
    assert(id, 'ID不能为空');
    assert(name, '名称不能为空');
    assert(content, '内容不能为空');
    const { Page: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.findById(id).update({ name, content, use: '', time });
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async delete({ id }) {
    assert(id, 'ID不能为空');
    const { Page: model } = this.ctx.model;
    try {
      const data = await model.findById(id).remove();
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async query({ skip, limit }) {
    const { Page: model } = this.ctx.model;
    try {
      const Pagesize = (skip - 1) * limit;
      const totals = await model.find();
      const total = totals.length;
      let data;
      if (skip !== null && limit !== null) {
        data = await model.find({}, { content: false }).limit(limit).skip(Pagesize);
      } else {
        data = await model.find({}, { content: false });
      }
      return { data, total };
    } catch (error) {
      console.log(error);
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async fetch({ id }) {
    assert(id, 'ID不能为空');
    const { Page: model } = this.ctx.model;
    try {
      const data = await model.findById(id);
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
}
module.exports = PageService;
