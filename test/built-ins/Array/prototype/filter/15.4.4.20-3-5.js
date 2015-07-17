// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-3-5
description: >
    Array.prototype.filter - value of 'length' is a number (value is
    -0)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return true;
        }

        var obj = { 0: 11, length: -0 };
        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 0 && !accessed;
    }
runTestCase(testcase);
