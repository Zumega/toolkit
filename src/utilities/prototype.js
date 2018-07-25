"use strict";

export {
    clear
}


function clear (array) {
    // change this to a prototype
    while (array.length) {
        array.pop();
    }

    return array;
}