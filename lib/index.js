'use strict';
// Hack to work around issue related to loading from other directories.
// See https://github.com/kripken/emscripten/issues/4542
const cwd = process.cwd();
process.chdir(__dirname);
const Sleep = require('./sleep');
process.chdir(cwd);
// End hack


function msleep (ms) {
  if (!Number.isInteger(ms)) {
    throw new TypeError('ms must be an integer');
  } else if (ms < 0) {
    throw new RangeError('ms must not be negative');
  }

  Sleep._MSleep(ms);
}


function nsleep (ns) {
  if (!Number.isInteger(ns)) {
    throw new TypeError('ns must be an integer');
  } else if (ns < 0) {
    throw new RangeError('ns must not be negative');
  }

  Sleep._NSleep(ns);
}


function sleep (sec) {
  if (!Number.isInteger(sec)) {
    throw new TypeError('sec must be an integer');
  } else if (sec < 0) {
    throw new RangeError('sec must not be negative');
  }

  Sleep._Sleep(sec);
}


function usleep (us) {
  if (!Number.isInteger(us)) {
    throw new TypeError('us must be an integer');
  } else if (us < 0) {
    throw new RangeError('us must not be negative');
  }

  Sleep._USleep(us);
}


module.exports = { msleep, nsleep, sleep, usleep };
