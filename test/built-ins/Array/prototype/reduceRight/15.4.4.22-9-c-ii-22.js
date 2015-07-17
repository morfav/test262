// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-22
description: >
    Array.prototype.reduceRight - boolean primitive can be used as
    accumulator
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === false;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, false) === true && accessed;
    }
runTestCase(testcase);
