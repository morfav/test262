// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-39-1
description: >
    Object.defineProperty - 'Attributes' is a Date object that uses
    Object's [[Get]] method to access the 'enumerable' property of
    prototype object (8.10.5 step 3.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var accessed = false;

        try {
            Date.prototype.enumerable = true;
            var dateObj = new Date();

            Object.defineProperty(obj, "property", dateObj);

            for (var prop in obj) {
                if (prop === "property") {
                    accessed = true;
                }
            }
            return accessed;
        } finally {
            delete Date.prototype.enumerable;
        }
    }
runTestCase(testcase);
