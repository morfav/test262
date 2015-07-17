// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-ii-22
description: >
    Array.prototype.some - callbackfn called with correct parameters
    (the index k is correct)
includes: [runTestCase.js]
---*/

function testcase() {

        var firstIndex = false;
        var secondIndex = false;

        function callbackfn(val, idx, obj) {
            if (val === 11) {
                firstIndex = (idx === 0);
                return false;
            }
            if (val === 12) {
                secondIndex = (idx === 1);
                return false;
            }
        }

        var obj = { 0: 11, 1: 12, length: 2 };

        return !Array.prototype.some.call(obj, callbackfn) && firstIndex && secondIndex;
    }
runTestCase(testcase);
