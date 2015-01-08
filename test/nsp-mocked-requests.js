
var nock = require('nock');

module.exports = function () {
  // Generated using nock.recorder.rec();

  var scopes = [];

  var scope = nock('https://registry.npmjs.org:443')
    .get('/qs')
    .reply(304, "", { date: 'Mon, 29 Dec 2014 18:09:41 GMT',
    server: 'Apache',
    via: '1.1 varnish',
    'last-modified': 'Mon, 29 Dec 2014 18:09:32 GMT',
    'cache-control': 'max-age=60',
    etag: '"C2OZKGZKGZ07N353V6XC1PTTE"',
    age: '42',
    'x-served-by': 'cache-jfk1030-JFK',
    'x-cache': 'HIT',
    'x-cache-hits': '4',
    'x-timer': 'S1419876581.976472,VS0,VE0',
    vary: 'Accept',
    'content-length': '0',
    'keep-alive': 'timeout=10, max=50',
    connection: 'Keep-Alive' });

  scopes.push(scope);

  scope = nock('https://nodesecurity.io:443')
    .get('/validate/qs/0.0.1')
    .reply(200, [{"title":"qs Denial-of-Service Extended Event Loop Blocking","author":"Tom Steele","module_name":"qs","publish_date":"Aug 6 2014 09:10:23 GMT-0800 (PST)","cves":[],"vulnerable_versions":"<1.0.0","patched_versions":">= 1.x","url":"qs_dos_extended_event_loop_blocking"},{"title":"qs Denial-of-Service Memory Exhaustion","author":"Dustin Shiver","module_name":"qs","publish_date":"Aug 6 2014 09:10:22 GMT-0800 (PST)","cves":[],"vulnerable_versions":"<1.0.0","patched_versions":">= 1.x","url":"qs_dos_memory_exhaustion"}], { server: 'openresty',
    date: 'Mon, 29 Dec 2014 18:09:42 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '518',
    connection: 'keep-alive',
    vary: 'Accept-Encoding',
    'cache-control': 'no-cache',
    'accept-ranges': 'bytes' });

    scopes.push(scope);

  scope = nock('https://nodesecurity.io:443')
    .get('/validate/bar/0.0.1')
    .reply(200, [], { server: 'openresty',
    date: 'Mon, 29 Dec 2014 18:09:43 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '2',
    connection: 'keep-alive',
    'cache-control': 'no-cache',
    'accept-ranges': 'bytes' });

  scopes.push(scope);

  scope = nock('https://registry.npmjs.org:443')
    .get('/qs')
    .reply(304, "", { date: 'Mon, 29 Dec 2014 18:09:44 GMT',
    server: 'Apache',
    via: '1.1 varnish',
    'last-modified': 'Mon, 29 Dec 2014 18:09:22 GMT',
    'cache-control': 'max-age=60',
    etag: '"C2OZKGZKGZ07N353V6XC1PTTE"',
    age: '43',
    'x-served-by': 'cache-jfk1023-JFK',
    'x-cache': 'HIT',
    'x-cache-hits': '4',
    'x-timer': 'S1419876584.052785,VS0,VE0',
    vary: 'Accept',
    'content-length': '0',
    'keep-alive': 'timeout=10, max=50',
    connection: 'Keep-Alive' });

  scopes.push(scope);

  scope = nock('https://nodesecurity.io:443')
    .get('/validate/qs/2.3.3')
    .reply(200, [], { server: 'openresty',
    date: 'Mon, 29 Dec 2014 18:09:44 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '2',
    connection: 'keep-alive',
    'cache-control': 'no-cache',
    'accept-ranges': 'bytes' });

  scopes.push(scope);

  scope = nock('https://nodesecurity.io:443')
    .get('/validate/bar/0.0.1')
    .reply(200, [], { server: 'openresty',
    date: 'Mon, 29 Dec 2014 18:09:45 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '2',
    connection: 'keep-alive',
    'cache-control': 'no-cache',
    'accept-ranges': 'bytes' });

  scopes.push(scope);

  scope = nock('https://nodesecurity.io:443')
    .post('/validate/shrinkwrap', {"name":"foo","version":"0.0.0","dependencies":{"qs":{"version":"0.0.1"}}})
    .reply(200, [{"dependencyOf":["foo"],"module":"qs","version":"0.0.1","advisory":{"title":"qs Denial-of-Service Extended Event Loop Blocking","author":"Tom Steele","module_name":"qs","publish_date":"Aug 6 2014 09:10:23 GMT-0800 (PST)","cves":[],"vulnerable_versions":"<1.0.0","patched_versions":">= 1.x","url":"qs_dos_extended_event_loop_blocking"}},{"dependencyOf":["foo"],"module":"qs","version":"0.0.1","advisory":{"title":"qs Denial-of-Service Memory Exhaustion","author":"Dustin Shiver","module_name":"qs","publish_date":"Aug 6 2014 09:10:22 GMT-0800 (PST)","cves":[],"vulnerable_versions":"<1.0.0","patched_versions":">= 1.x","url":"qs_dos_memory_exhaustion"}}], { server: 'openresty',
    date: 'Mon, 29 Dec 2014 18:09:45 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '654',
    connection: 'keep-alive',
    vary: 'Accept-Encoding',
    'cache-control': 'no-cache' });
  scopes.push(scope);

  scope = nock('https://nodesecurity.io:443')
    .post('/validate/shrinkwrap', {"name":"foo","version":"0.0.0","dependencies":{"qs":{"version":"2.3.3"}}})
    .reply(200, [], { server: 'openresty',
    date: 'Mon, 29 Dec 2014 18:09:46 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '2',
    connection: 'keep-alive',
    'cache-control': 'no-cache' });
  scopes.push(scope);

  return scopes;
};
