'use strict';

const Controller = require('egg').Controller;

class FileController extends Controller {
  async upload() {
    const data = await this.service.file.upload(this.ctx.request.files[0]);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
  async download() {
    const data = await this.service.file.download(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
  async delete() {
    const data = await this.service.file.delete(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
  async query() {
    const data = await this.service.file.query(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', ...data };
  }
  async fetch() {
    const data = await this.service.file.fetch(this.ctx.request.body);
    this.ctx.body = { errcode: '0', errmsg: '', data };
  }
}

module.exports = FileController;
