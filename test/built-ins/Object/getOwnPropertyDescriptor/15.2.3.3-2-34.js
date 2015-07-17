// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-34
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is applied to
    string 'undefined'
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "undefined": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, "undefined");

        return desc.value === 1;
    }
runTestCase(testcase);
