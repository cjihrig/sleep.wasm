'use strict';
const Code = require('code');
const Lab = require('lab');
const { msleep, nsleep, sleep, usleep } = require('../lib');

// Test shortcuts
const lab = exports.lab = Lab.script();
const { describe, it } = lab;
const { expect } = Code;


describe('Sleep', () => {
  it('all functions throw on bad inputs', () => {
    [
      [msleep, 'ms'], [nsleep, 'ns'], [sleep, 'sec'], [usleep, 'us']
    ].forEach(([fn, name]) => {
      [3.14, NaN, Infinity, undefined, null, 'foo', true, false, {}, []].forEach((val) => {
        expect(() => {
          fn(val);
        }).to.throw(TypeError, `${name} must be an integer`);
      });

      expect(() => {
        fn(-1);
      }).to.throw(RangeError, `${name} must not be negative`);
    });
  });

  it('all functions sleep for defined delay', () => {
    [
      [msleep, 1000], [nsleep, 1000000000], [sleep, 1], [usleep, 1000000]
    ].forEach(([fn, delay]) => {
      const start = new Date();
      fn(delay);
      const end = new Date();
      expect(end - start).to.be.between(900, 1100);
    });
  });
});
