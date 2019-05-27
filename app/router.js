'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 栏目
  router.post('/admin/column/add', controller.column.add);
  router.post('/admin/column/update', controller.column.update);
  router.post('/admin/column/delete', controller.column.delete);
  router.post('/admin/column/query', controller.column.query);
  router.post('/admin/column/fetch', controller.column.fetch);
  // 单页
  router.post('/admin/page/add', controller.page.add);
  router.post('/admin/page/update', controller.page.update);
  router.post('/admin/page/delete', controller.page.delete);
  router.post('/admin/page/query', controller.page.query);
  router.post('/admin/page/fetch', controller.page.fetch);
  // 菜单
  router.post('/admin/nav/add', controller.nav.add);
  router.post('/admin/nav/update', controller.nav.update);
  router.post('/admin/nav/delete', controller.nav.delete);
  router.post('/admin/nav/query', controller.nav.query);
  router.post('/admin/nav/fetch', controller.nav.fetch);
  // 内容
  router.post('/admin/content/add', controller.content.add);
  router.post('/admin/content/update', controller.content.update);
  router.post('/admin/content/delete', controller.content.delete);
  router.post('/admin/content/query', controller.content.query);
  router.post('/admin/content/fetch', controller.content.fetch);
  // 配置
  router.post('/admin/info/add', controller.info.add);
  router.post('/admin/info/update', controller.info.update);
  router.post('/admin/info/delete', controller.info.delete);
  router.post('/admin/info/query', controller.info.query);
  router.post('/admin/info/fetch', controller.info.fetch);
  // 文件上传
  router.post('/admin/file/upload', controller.file.upload);
  router.post('/admin/file/download', controller.file.download);
  router.post('/admin/file/delete', controller.file.delete);
  router.post('/admin/file/query', controller.file.query);
  router.post('/admin/file/fetch', controller.file.fetch);
};
