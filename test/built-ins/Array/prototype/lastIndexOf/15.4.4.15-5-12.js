// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-12
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is Infinity)
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [];
        arr[Math.pow(2, 32) - 2] = null; // length is the max value of Uint type
        return arr.lastIndexOf(null, Infinity) === (Math.pow(2, 32) - 2);
    }
runTestCase(testcase);
