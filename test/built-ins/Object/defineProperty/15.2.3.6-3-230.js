// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-230
description: >
    Object.defineProperty - 'Attributes' is the global object that
    uses Object's [[Get]] method to access the 'get' property (8.10.5
    step 7.a)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
        var obj = {};

        try {
            fnGlobalObject().get = function () {
                return "globalGetProperty";
            };

            Object.defineProperty(obj, "property", fnGlobalObject());

            return obj.property === "globalGetProperty";
        } finally {
            delete fnGlobalObject().get;
        }
    }
runTestCase(testcase);
