/* eslint-disable linebreak-style */
'use strict';
const Service = require('egg').Service;
const moment = require('moment');
const assert = require('assert');
const { BusinessError } = require('naf-core').Error;
class QueryService extends Service {
  async add({ name, content, binding, label, index, annex, state }) { // 添加uri
    assert(name, '标题不能为空');
    assert(content, '内容不能为空');
    assert(binding, '绑定id不能为空');
    assert(index, '排序不能为空');
    assert(state, '状态不能为空');
    if (!annex) {
      console.log(annex);
      throw new BusinessError(-1002, '附件字段不存在');
    }
    if (!label) {
      throw new BusinessError(-1002, '标签字段不存在');
    }
    const { Content: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.create({ name, content, binding, label, index, annex, state, time });
      return data;
    } catch (error) {
      throw new BusinessError(-1, '数据库错误');
    }
  }
  async update({ id, name, content, binding, label, index, annex, state }) {
    assert(id, 'id不能为空');
    assert(name, '标题不能为空');
    assert(content, '内容不能为空');
    assert(binding, '绑定id不能为空');
    assert(index, '排序不能为空');
    assert(state, '状态不能为空');
    if (!annex) {
      throw new BusinessError(-1002, '附件字段不存在');
    }
    if (!label) {
      throw new BusinessError(-1002, '标签字段不存在');
    }
    const { Content: model } = this.ctx.model;
    try {
      const time = moment().format('YYYY-MM-DD hh:mm:ss');
      const data = await model.findById(id).update({ name, content, binding, label, index, annex, state, time });
      return data;
    } catch (error) {
      console.log(error);
      throw new BusinessError(-1, '数据库错误');
    }
  }
  async delete({ id }) {
    assert(id, 'ID不能为空');
    const { Content: model } = this.ctx.model;
    try {
      const data = await model.findById(id).remove();
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async query({ skip, limit, binding }) {
    assert(skip, '页数不能为空');
    assert(limit, '条数不能为空');
    assert(binding, '条件不能为空');
    const { Content: model } = this.ctx.model;
    try {
      const Pagesize = (skip - 1) * limit;
      const totals = await model.find({ binding });
      const total = totals.length;
      const data = await model.find({ binding }, { content: false }).limit(limit).skip(Pagesize)
        .sort({ index: 1 });
      return { data, total };
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
  async fetch({ id }) {
    assert(id, 'ID不能为空');
    const { Content: model } = this.ctx.model;
    try {
      const data = await model.findById(id);
      return data;
    } catch (error) {
      throw new BusinessError(-1001, '数据库错误');
    }
  }
}
module.exports = QueryService;
