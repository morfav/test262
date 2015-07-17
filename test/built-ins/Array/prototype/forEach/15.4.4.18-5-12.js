// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-5-12
description: Array.prototype.forEach - Boolean Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var objBoolean = new Boolean();

        function callbackfn(val, idx, obj) {
            result = (this === objBoolean);
        }

        [11].forEach(callbackfn, objBoolean);
        return result;
    }
runTestCase(testcase);
