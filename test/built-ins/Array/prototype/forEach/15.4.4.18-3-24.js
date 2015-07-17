// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-3-24
description: >
    Array.prototype.forEach - value of 'length' is a positive
    non-integer, ensure truncation occurs in the proper direction
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(val, idx, obj) {
            testResult = (val > 10);
        }

        var obj = {
            1: 11,
            2: 9,
            length: 2.685
        };

        Array.prototype.forEach.call(obj, callbackfn);

        return testResult;
    }
runTestCase(testcase);
