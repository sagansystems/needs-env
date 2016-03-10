'use strict';

var assert = require('assert');
var needsEnv = require('.');

function subject() {
  needsEnv('A', 'B').inProd('C', 'D');
}

withEnv({}, () => {
  assert.throws(subject, /missing: A, B/);
});

withEnv({ A: 1 }, () => {
  assert.throws(subject, /missing: B/);
});

withEnv({ A: 1, B: 1 }, () => {
  assert.doesNotThrow(subject);
});

withEnv({ A: 1, B: 1, NODE_ENV: 'production' }, () => {
  assert.throws(subject, /missing: C, D/);
});

withEnv({ A: 1, B: 1, C: 1, NODE_ENV: 'production' }, () => {
  assert.throws(subject, /missing: D/);
});

withEnv({ A: 1, B: 1, C: 1, D: 1, NODE_ENV: 'production' }, () => {
  assert.doesNotThrow(subject);
});

function withEnv(env, callback) {
  var cache = process.env;
  process.env = env;
  callback();
  process.env = cache;
}
