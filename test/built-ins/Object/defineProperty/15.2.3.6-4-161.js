// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-161
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', set the [[Value]] field of 'desc' to a value
    lesser than the existing value of length and test that indexes
    beyond the new length are deleted(15.4.5.1 step 3.f)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [0, 1];
        
        Object.defineProperty(arrObj, "length", {
            value: 1
        });
        return arrObj.length === 1 && !arrObj.hasOwnProperty("1");
    }
runTestCase(testcase);
