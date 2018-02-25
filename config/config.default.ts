import { Application, EggAppConfig } from 'egg';
import { join } from 'path';
// import { readFileSync } from 'fs';

export default (app: EggAppConfig) => {
  const exports: any = {};

  // exports.siteFile = {
  //   '/favicon.ico': readFileSync(join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  // };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: join(app.baseDir, 'app/web/template/layout.html')
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'access'
  ];

  return exports;
};