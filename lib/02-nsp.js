var fs    = require('fs');
var path  = require('path');

// TODO Change this is hacky
var auditPackage  = require('nsp/lib/auditPackage');
var nspShrinkwrap = require('nsp-audit-shrinkwrap');

var Promise = require('bluebird');

function hasShrinkwrap(folder) {
  return new Promise(function (resolve, reject) {
    fs.exists(folder, function (exists) {
      resolve(exists);
    });
  });
}

function auditPackageAsync(packageJsonPath) {
  return new Promise(function (resolve, reject) {
    auditPackage(packageJsonPath, function (err, results) {
      if (err) {
        return reject(err);
      }

      resolve(results);
    });
  });
}

function auditShrinkwrapAsync(packageJsonPath) {
  return new Promise(function (resolve, reject) {
    nspShrinkwrap.auditByPath(packageJsonPath, function (err, results) {
      if (err) {
        return reject(err);
      }

      resolve(results);
    });
  });
}

// XXX Ugly hack to use nsp programmatically
function nsp(root) {
  console.log('root', root);
  var shrinkwrapPath = path.resolve(root, 'npm-shrinkwrap.json');
  var packageJsonPath = path.resolve(root, 'package.json');

  return hasShrinkwrap(shrinkwrapPath).then(function (hasShrinkwrap) {
    if (hasShrinkwrap) {
      return auditShrinkwrapAsync(shrinkwrapPath);
    }

    return auditPackageAsync(packageJsonPath);
  });
}

module.exports = nsp;
