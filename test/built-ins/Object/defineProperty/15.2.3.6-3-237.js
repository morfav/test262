// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-237
description: >
    Object.defineProperty - 'set' property in 'Attributes' is own data
    property (8.10.5 step 8.a)
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
