// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-c-i-25
description: >
    Array.prototype.filter - This object is the Arguments object which
    implements its own property get method (number of arguments is
    less than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return val === 11 && idx === 0;
        }

        var func = function (a, b) {
            return Array.prototype.filter.call(arguments, callbackfn);
        };

        var newArr = func(11);

        return newArr.length === 1 && newArr[0] === 11;
    }
runTestCase(testcase);
