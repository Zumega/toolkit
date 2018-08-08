import { _CACHE_ } from './cache_base';
import Moment from 'react-moment';

const DURATION = {
    long: {count: 1, duration: 'w', type: 'long'},
    mid: {count: 1, duration: 'd', type: 'mid'},
    short: {count: 1, duration: 'h', type: 'short'},
    micro: {count: 20, duration: 's', type: 'micro'}
};

let cache = _CACHE_.api;

// cache(<key>).long(<data>);
// convert to class
export function Cache (myKey) {
    // TODO: change mid and long to use LOCAL STORAGE

    this.get = GET;
    this.long = LONG;
    this.short = SHORT;
    this.mid = MID;
    this.micro = MICRO;
    this.empty = CLEAR;
    this.check = CHECK;

    let exists = null;

    function checkArgs (a, b) {
        if (!a) {
            return false;
        }
        if (!b) {
            return false;
        }

        return true;
    }

    function checkOtherDurations (type) {
        if (doesExists() && cache[myKey].type !== type) {
            cache[myKey] =  undefined;
            exists = null;
        }
    }

    function doesExists (key = myKey) {
        if (typeof exists !== 'boolean') {
            exists = !!(cache[key]);
        }

        return exists;
    }

    function caching (cacheLength, data) {
        if (checkArgs(myKey, data)) {
            return new Error('No key and or data.');
        }

        checkOtherDurations(cacheLength.type);

        if (doesExists()) {
            if (Moment(cache[myKey].timeStamp).isBefore(Moment())) {
                cache[myKey] = undefined;
            } else {
                return cache[myKey].data;
            }
        }

        cache[myKey] = {
            data,
            timeStamp: Moment(new Date()).add(cacheLength.count, cacheLength.duration),
            type: cacheLength.type
        };

        exists = true;

        return data;
    }

    // return cached key value
    function GET (key = myKey) {
        if (doesExists() && Moment(cache[myKey].timeStamp).isBefore(Moment())) {
            cache[myKey] = undefined;
            exists = false;
        }

        return cache[myKey] || myKey;
    }

    // cache for 1 week
    function LONG (data) {
        return caching(DURATION.long, data);
    }

    // cache for 1 day
    function MID (data) {
        return caching(DURATION.mid, data);
    }

    // cache for 1 hour
    function SHORT (data) {
        return caching(DURATION.short, data);
    }

    // cache for 20 seconds
    function MICRO (data) {
        return caching(DURATION.micro, data);
    }

    // empties cache object or key
    function CLEAR (key = myKey) {
        this.all = () => {
            cache = {};
            exists = false;
        };
        this.key = (k = key) => {
            cache[key] = undefined;
        };
    }

    // returns cache object
    function CHECK () {
        console.log(cache);

        return cache;
    }
}