'use strict';

const biz = require('..');
const assert = require('assert').strict;

assert.strictEqual(biz(), 'Hello from biz');
console.info('biz tests passed');
