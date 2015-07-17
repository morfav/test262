// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-1-4
description: Array.prototype.every applied to Boolean object
includes: [runTestCase.js]
---*/

function testcase() {
        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return obj instanceof Boolean;
        }

        var obj = new Boolean(true);
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 12;
        return Array.prototype.every.call(obj, callbackfn) && accessed;
    }
runTestCase(testcase);
