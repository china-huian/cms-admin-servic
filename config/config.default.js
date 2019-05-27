/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556181030063_5966';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/topic',
    // options: {
    //   useMongoClient: true,
    //   user: 'root',
    //   pass: '',
    //   authSource: 'home',
    // },
  };
  // config.cluster = {
  //   listen: {
  //     port: 7001,
  //     hostname: '127.0.0.1',
  //   },
  // };
  // 安全配置
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.multipart = {
    mode: 'file',
    whitelist: [
      // images
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
      '.gif', // image/gif
      '.zip',
      '.xlsx',
      '.docx',
    ],
  };
  return {
    ...config,
    ...userConfig,
  };
};
