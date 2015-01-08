var assert = require('assert');

var isVulnerable = require('../lib/03-ignores');

describe('ignores / isVulnerable', function () {
  it('should return false if dependency is ignored', function () {
    var module = { module: 'qs',
        version: '0.0.1',
        advisory:
          { title: 'qs Denial-of-Service Extended Event Loop Blocking',
            author: 'Tom Steele',
            module_name: 'qs',
            publish_date: 'Aug 6 2014 09:10:23 GMT-0800 (PST)',
            cves: [],
            vulnerable_versions: '<1.0.0',
            patched_versions: '>= 1.x',
            url: 'qs_dos_extended_event_loop_blocking' },
            dependencyOf: [ 'bar@0.0.1', 'qs@0.0.1' ]
    };

    var ignores = [['bar@0.0.1', 'qs@0.0.1', 'qs'].join('/')];

    assert.equal(false, isVulnerable(ignores)(module));


    // modules = [ { dependencyOf: [ 'foo' ],
    //   module: 'qs',
    //   version: '0.0.1',
    //   advisory:
    //     { title: 'qs Denial-of-Service Extended Event Loop Blocking',
    //       author: 'Tom Steele',
    //       module_name: 'qs',
    //       publish_date: 'Aug 6 2014 09:10:23 GMT-0800 (PST)',
    //       cves: [],
    //       vulnerable_versions: '<1.0.0',
    //       patched_versions: '>= 1.x',
    //       url: 'qs_dos_extended_event_loop_blocking' } }
    //        ];

  });
  it('should return true if dependency is not ignored', function () {
    var module = { module: 'qs',
        version: '0.0.1',
        advisory:
          { title: 'qs Denial-of-Service Extended Event Loop Blocking',
            author: 'Tom Steele',
            module_name: 'qs',
            publish_date: 'Aug 6 2014 09:10:23 GMT-0800 (PST)',
            cves: [],
            vulnerable_versions: '<1.0.0',
            patched_versions: '>= 1.x',
            url: 'qs_dos_extended_event_loop_blocking' },
            dependencyOf: [ 'bar@0.0.1', 'qs@0.0.1' ]
    };
    var ignores = [];
    assert.equal(true, isVulnerable(ignores)(module));
  });
});
