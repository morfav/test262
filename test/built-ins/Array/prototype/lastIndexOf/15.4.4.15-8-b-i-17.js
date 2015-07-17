// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-b-i-17
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property without a get function on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];
        Object.defineProperty(arr, "0", {
            set: function () { },
            configurable: true
        });

        return arr.lastIndexOf(undefined) === 0;
    }
runTestCase(testcase);
