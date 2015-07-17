// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-iii-16
description: >
    Array.prototype.filter return value of callbackfn is a Function
    object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return function () { };
        }

        var newArr = [11].filter(callbackfn);
        return newArr.length === 1 && newArr[0] === 11;
    }
runTestCase(testcase);
