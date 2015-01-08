var assert = require('assert');

var nock = require('nock');

var nsp = require('../lib/02-nsp');

var mockRequests = require('./nsp-mocked-requests');

// TODO Mock using hock
describe('nsp', function () {
  var scopes;

  before(function () {
    scopes = mockRequests();
  });

  after(function () {
    scopes.forEach(function (scope) { scope.done(); });
    nock.cleanAll();
  });

  describe('checking package.json repos', function () {
    it('should detect detect dependencies', function (done) {
      nsp('./test/fixtures/nsp/invalid/package/').done(function (result) {
        assert.equal(1, result.length);
        done();
      }, done);
    });
    it('should not fail on valid dependencies', function (done) {
      nsp('./test/fixtures/nsp/valid/package/').done(function (result) {
        assert.ok(result);
        assert.equal(0, result.length);
        done();
      }, done);
    });
  });
  describe('checking npm-shrinkwrap.json repos', function () {
    it('should detect vulnerable dependencies', function (done) {
      nsp('./test/fixtures/nsp/invalid/shrinkwrap/').done(function (result) {
        assert.ok(result);
        assert.equal(2, result.length);
        done();
      }, done);
    });
    it('should not fail on valid dependencies', function (done) {
      nsp('./test/fixtures/nsp/valid/shrinkwrap/').done(function (result) {
        assert.ok(result);
        assert.equal(0, result.length);
        done();
      }, done);
    });
  });
});
