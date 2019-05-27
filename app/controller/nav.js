'use strict';

const Controller = require('egg').Controller;

class NavController extends Controller {
  async add() {
    const data = await this.service.nav.add(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async update() {
    const data = await this.service.nav.update(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async delete() {
    const data = await this.service.nav.delete(this.ctx.request.body);
    if (data !== null) {
      this.ctx.body = { errcode: '0', errmsg: '' };
    }
  }
  async query() {
    const data = await this.service.nav.query(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', ...data };
  }
  async fetch() {
    const data = await this.service.nav.fetch(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
}

module.exports = NavController;
