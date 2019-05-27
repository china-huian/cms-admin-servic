/* eslint-disable linebreak-style */
'use strict';

const Schema = require('mongoose').Schema;
// Schema(数据属性模型)
const SchemaDefine = {
  name: { type: String, required: false, maxLength: 128 },
  url: { type: String, required: false, maxLength: 128 },
  time: { type: String, required: false, maxLength: 128 },
  use: { type: String, required: false, maxLength: 128 },
  type: { type: String, required: false, maxLength: 128 },
};
const schema = new Schema(SchemaDefine);
module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('upload', schema, 'file'); // 第一个参数是自己的命名  第二个参数是存储的值数据模型    第三个参数是存储的集合名
};
