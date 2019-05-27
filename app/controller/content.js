'use strict';

const Controller = require('egg').Controller;

class ContentController extends Controller {
  async add() {
    const data = await this.service.content.add(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async update() {
    const data = await this.service.content.update(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async delete() {
    const data = await this.service.content.delete(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async query() {
    const data = await this.service.content.query(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', ...data };
  }
  async fetch() {
    const data = await this.service.content.fetch(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
}

module.exports = ContentController;
