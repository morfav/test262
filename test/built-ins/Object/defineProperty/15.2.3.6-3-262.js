// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-262
description: >
    Object.defineProperty - value of 'set' property in 'Attributes' is
    a function (8.10.5 step 8.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var data = "data";

        Object.defineProperty(obj, "property", {
            set: function (value) {
                data = value;
            }
        });
        obj.property = "overrideData";

        return obj.hasOwnProperty("property") && data === "overrideData";
    }
runTestCase(testcase);
