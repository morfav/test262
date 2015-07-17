// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-14
description: >
    Array.prototype.reduceRight - decreasing length of array in step 8
    causes deleted index property not to be visited
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            if (idx === 2) {
                testResult = false;
            }
        }

        var arr = [0, 1, 2, 3];

        Object.defineProperty(arr, "3", {
            get: function () {
                arr.length = 2;
                return 0;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn);

        return testResult && accessed;
    }
runTestCase(testcase);
