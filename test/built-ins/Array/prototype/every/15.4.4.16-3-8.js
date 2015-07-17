// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-3-8
description: >
    Array.prototype.every - value of 'length' is a number (value is
    Infinity)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var obj = { 0: 9, length: Infinity };

        return !Array.prototype.every.call(obj, callbackfn) && accessed;
    }
runTestCase(testcase);
