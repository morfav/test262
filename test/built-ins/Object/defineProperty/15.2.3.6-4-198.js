// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-198
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' property doesn't exist in 'O', test
    TypeError is thrown when 'O' is not extensible (15.4.5.1 step 4.c)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [];
        Object.preventExtensions(arrObj);

        try {
            var desc = { value: 1 };
            Object.defineProperty(arrObj, "0", desc);
            return false;
        } catch (e) {
            return e instanceof TypeError && (arrObj.hasOwnProperty("0") === false);
        }
    }
runTestCase(testcase);
