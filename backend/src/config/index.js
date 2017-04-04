'use strict'

const path    = require('path');
const config  = require('./environment/config.json');

global._require = (pathName) => {
  return require(path.join(__dirname, "../../", pathName));
};

let env = process.env.NODE_ENV || 'development';

let envConfig = config[env];
if (envConfig) {
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
