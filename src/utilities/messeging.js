import { _CACHE_ } from './cache_base';

export const message = new Messages();

function Messages() {
  const cache = _CACHE_.messages;

  this.sub = (name, fn) => {
    if (cache[name]) {
      return typeof fn === 'function' ? fn(cache[name]) : cache[name];
    }

    return new Error(`NOTHING GOOD: ${name}`);
  };

  this.pub = (name = 'NULL', value = '') => {
    cache[name] = value;
  };

  this.clear = (name) => {
    if (name) {
      return cache[name] = undefined;
    }

    return _CACHE_.messages = {};
  };
}