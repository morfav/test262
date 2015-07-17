// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-2-3
description: >
    Object.defineProperties - argument 'Properties' is a boolean whose
    value is false
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var obj1 = Object.defineProperties(obj, false);
        return obj === obj1;
    }
runTestCase(testcase);
