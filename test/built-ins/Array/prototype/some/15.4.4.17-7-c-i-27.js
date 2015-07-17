// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-27
description: >
    Array.prototype.some - This object is the Arguments object which
    implements its own property get method (number of arguments is
    greater than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var firstResult = false;
        var secondResult = false;
        var thirdResult = false;

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                firstResult = (val === 11);
                return false;
            } else if (idx === 1) {
                secondResult = (val === 12);
                return false;
            } else if (idx === 2) {
                thirdResult = (val === 9);
                return false;
            } else {
                return true;
            }
        }

        var func = function (a, b) {
            return Array.prototype.some.call(arguments, callbackfn);
        };

        return !func(11, 12, 9) && firstResult && secondResult && thirdResult;
    }
runTestCase(testcase);
