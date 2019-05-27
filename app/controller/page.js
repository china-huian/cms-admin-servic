'use strict';

const Controller = require('egg').Controller;

class PageController extends Controller {
  async add() {
    const data = await this.service.page.add(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async update() {
    const data = await this.service.page.update(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async delete() {
    const data = await this.service.page.delete(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async query() {
    const data = await this.service.page.query(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', ...data };
  }
  async fetch() {
    const data = await this.service.page.fetch(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
}

module.exports = PageController;
