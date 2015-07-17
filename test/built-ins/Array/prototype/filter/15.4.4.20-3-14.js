// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-3-14
description: Array.prototype.filter - 'length' is a string containing -Infinity
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed2 = false;

        function callbackfn2(val, idx, obj) {
            accessed2 = true;
            return true;
        }

        var obj2 = { 0: 9, length: "-Infinity" };

        var newArr2 = Array.prototype.filter.call(obj2, callbackfn2);

        return !accessed2 && newArr2.length === 0;
    }
runTestCase(testcase);
