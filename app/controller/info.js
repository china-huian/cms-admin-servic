'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
  async add() {
    const data = await this.service.info.add(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async update() {
    const data = await this.service.info.update(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async delete() {
    const data = await this.service.info.delete(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async query() {
    const data = await this.service.info.query(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', ...data };
  }
  async fetch() {
    const data = await this.service.info.fetch(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
}

module.exports = InfoController;
