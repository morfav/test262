// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-5-19
description: Array.prototype.every - the Arguments object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var arg;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return this === arg;
        }

        (function fun() {
            arg = arguments;
        }(1, 2, 3));

        return [11].every(callbackfn, arg) && accessed;
    }
runTestCase(testcase);
