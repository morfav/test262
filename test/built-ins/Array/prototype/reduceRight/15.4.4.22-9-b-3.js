// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-b-3
description: >
    Array.prototype.reduceRight - deleted properties in step 2 are
    visible here
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var testResult = true;

        function callbackfn(preVal, curVal, idx, obj) {
            accessed = true;
            if (idx === 2) {
                testResult = false;
            }
        }

        var obj = { 2: "2", 3: 10 };

        Object.defineProperty(obj, "length", {
            get: function () {
                delete obj[2];
                return 5;
            },
            configurable: true
        });

        Array.prototype.reduceRight.call(obj, callbackfn, "initialValue");

        return accessed && testResult;
    }
runTestCase(testcase);
