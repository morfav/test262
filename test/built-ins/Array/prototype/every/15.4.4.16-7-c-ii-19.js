// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-19
description: Array.prototype.every - non-indexed properties are not called
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;

        function callbackfn(val, idx, obj) {
            called++;
            return val !== 8;
        }

        var obj = { 0: 11, 10: 12, non_index_property: 8, length: 20 };

        return Array.prototype.every.call(obj, callbackfn) && 2 === called;
    }
runTestCase(testcase);
