// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-3-16
description: >
    Array.prototype.reduce - 'length' is a string containing a hex
    number
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return (curVal === 11 && idx === 1);
        }

        var obj = { 1: 11, 2: 9, length: "0x0002" };

        return Array.prototype.reduce.call(obj, callbackfn, 1) === true;
    }
runTestCase(testcase);
