import { _CACHE_ } from './cache_base';

export default class Messages {
  constructor() {
    this.cache = _CACHE_.messages;
  }

  pub = (name = 'NULL', value = '') => {
    this.cache[name] = value;
  };
  
  sub = (name, fn) => {
    if (this.cache[name]) {
      return typeof fn === 'function' ? fn(this.cache[name]) : this.cache[name];
    }

    return new Error(`NOTHING GOOD: ${name}`);
  };

  clear = (name) => {
    if (name) {
      return this.cache[name] = undefined;
    }

    return _CACHE_.messages = {};
  };
}

// export const message = new Messages();