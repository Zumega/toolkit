"use strict";

import { _CACHE_ } from './cache_base';

export function memoize(fn, args = [], clear = false) {
  // Validity checks
  if (typeof fn !== 'function') {
    return new Error('No function to memoize');
  }
  if (!fn.name) {
    return new Error('No anonymous functions');
  }
  if (!Array.isArray(args)) {
    return new Error('Arguments need to be in an ARRAY');
  }
  if (typeof clear !== 'boolean') {
    return new Error('CLEAR needs to be a boolean');
  }

  // Set values
  const cache = _CACHE_.functions;
  const fnName = fn.name;
  let argName = '';

  args.forEach(x => {
    if (x === undefined || x === null) return;
    if (typeof x.getTime === 'function') x = x.getTime();

    argName += encodeURI((x + ''));
  });

  // Empty objects
  if (clear) {
    if (argName) {
      // Clear cache of function -> args
      if (cache[fnName] && cache[fnName][argName]) {
        cache[fnName][argName] = undefined;
      }
    } else if (!argName) {
      // Clear cache of function
      if (cache[fnName]) {
        cache[fnName] = undefined;
      }
    }
  }

  // Set cache
  if (!cache[fnName]) {
    cache[fnName] = {};
  }

  if (!cache[fnName][argName]) {
    cache[fnName][argName] = fn(...args);
  }

  return cache[fnName][argName];
}