var assert  = require('assert');
var url     = require('url');
var path    = require('path');

var rimraf = require('rimraf');

var cloneOrUpdateRepo = require('../lib/01-git.js');

describe('git', function () {

  beforeEach(function (done) { rimraf('./erase', done); });
  afterEach(function (done) { rimraf('./erase', done); });

  it('should clone the repo successfully', function (done) {
    var localRepoURL = url.format({
      protocol: 'file',
      slashes: true,
      pathname: path.resolve(path.join('test', 'fixtures', 'emptyrepo'))
    });

    cloneOrUpdateRepo('./erase', localRepoURL)
      .then(function (root) {
        assert('./erase/lock', root);
        done();
      });
  });
});
