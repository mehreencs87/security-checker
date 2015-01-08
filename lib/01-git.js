var Promise = require('bluebird');

var clone = require('nodegit').Clone.clone;
var NodeGit = require('nodegit');

function cloneOrUpdateGit(root, gitRepo) {

  var options = {
    ignoreCertErrors: 1,
    remoteCallbacks: {
      credentials: function(url, userName) {
        return NodeGit.Cred.sshKeyFromAgent(userName);
      }
    }
  };
  // TODO Validate

  // Making nodegit promise compatible with bluebird promises
  return new Promise(function (resolve, reject) {
    clone(gitRepo, root, options)
      .then(function (repo) { resolve(repo); })
      .catch(function (err) { reject(err); });
  });
}

module.exports = cloneOrUpdateGit;
