# sleep.wasm

[![Current Version](https://img.shields.io/npm/v/sleep.wasm.svg)](https://www.npmjs.org/package/sleep.wasm)
[![Build Status via Travis CI](https://travis-ci.org/cjihrig/sleep.wasm.svg?branch=master)](https://travis-ci.org/cjihrig/sleep.wasm)
![Dependencies](http://img.shields.io/david/cjihrig/sleep.wasm.svg)
[![belly-button-style](https://img.shields.io/badge/eslint-bellybutton-4B32C3.svg)](https://github.com/cjihrig/belly-button)

WebAssembly implementation of sleep. This module began life as a quasi-fork of the [sleep](https://www.npmjs.com/package/sleep) module. The methods provided by this module are synchronous and block execution while the process sleeps.

## Basic Usage

```javascript
'use strict';
const { msleep, nsleep, sleep, usleep } = require('sleep.wasm');

// Each of these calls sleep for one second.
msleep(1000);
nsleep(1000000000);
sleep(1);
usleep(1000000);
```

## API

`sleep.wasm` exports the following methods.

### `msleep(ms)`

  - Arguments
    - `ms` (number) - The number of milliseconds to sleep for.
  - Returns
    - Nothing

### `nsleep(ns)`

  - Arguments
    - `ns` (number) - The number of nanoseconds to sleep for.
  - Returns
    - Nothing

### `sleep(sec)`

  - Arguments
    - `sec` (number) - The number of seconds to sleep for.
  - Returns
    - Nothing

### `usleep(us)`

  - Arguments
    - `us` (number) - The number of microseconds to sleep for.
  - Returns
    - Nothing
