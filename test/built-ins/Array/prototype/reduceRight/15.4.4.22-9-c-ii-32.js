// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-32
description: >
    Array.prototype.reduceRight - RegExp Object can be used as
    accumulator
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var objRegExp = new RegExp();
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objRegExp;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, objRegExp) === true && accessed;
    }
runTestCase(testcase);
