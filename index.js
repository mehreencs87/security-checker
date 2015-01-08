var fs = require('fs');
var path = require('path');

var Promise = require('bluebird');

var YAML = require('libyaml');

var dotenv = require('dotenv');
dotenv.load();

var cloneOrUpdateGit  = require('./lib/01-git');
var nsp               = require('./lib/02-nsp');
var isVulnerable      = require('./lib/03-ignores');
var callWebhook       = require('./lib/04-webhook');

var rimraf            = require('rimraf');

function readConfig(filepath, cb) {
  YAML.readFile(filepath, function(err, contents) {
    var content = contents[0];
    if (err) { return cb(err); }

    return cb(null, content);
  });
}

var gitRoot = process.env.GIT_REPOS_ROOT || './repos';

rimraf.sync(gitRoot);

readConfig('./config.yaml', function (err, config) {

  if (!config.repositories) {
    throw new Error('config should have a repositories entry');
  }
  var vulnerabilities = Object.keys(config.repositories).map(function (repoName) {
    var repo = config.repositories[repoName];
    var gitPromise = cloneOrUpdateGit(path.join(gitRoot, repoName), repo.git);
    return gitPromise.then(function (git) {
      var gitPath = path.resolve(git.path(), '..');
      return nsp(gitPath);
    }).then(function (vulnerabilities) {
      return Promise.all(vulnerabilities.filter(isVulnerable(repo.ignores))).then(function (vulnerabilities) {
        vulnerabilities = vulnerabilities.map(function (vulnerability) {
          vulnerability.toIgnore = vulnerability.dependencyOf.concat(vulnerability.module);
          return vulnerability;
        });
        return {
          name: repoName,
          vulnerabilities: vulnerabilities
        };
      });
    });
  });

  Promise.all(vulnerabilities).done(function (result) {
    console.log(JSON.stringify(result));
  });

  // callWebhook(Promise.all(vulnerabilities));
});
