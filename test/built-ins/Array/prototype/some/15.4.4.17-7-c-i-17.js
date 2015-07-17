// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-17
description: >
    Array.prototype.some - element to be retrieved is own accessor
    property without a get function on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return typeof val === "undefined";
            }
            return false;
        }

        var obj = { length: 2 };
        Object.defineProperty(obj, "1", {
            set: function () { },
            configurable: true
        });

        return Array.prototype.some.call(obj, callbackfn);
    }
runTestCase(testcase);
