function isVulnerable(ignores) {
  return function (vulnerableModule) {
    var vulnerablePath = JSON.parse(JSON.stringify(vulnerableModule.dependencyOf));
    vulnerablePath.push(vulnerableModule.module);

    return ignores.indexOf(vulnerablePath.join('/')) === -1;
  };
}

module.exports = isVulnerable;
