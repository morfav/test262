// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-22
description: >
    Object.defineProperty - 'name' is existing own data property
    (8.12.9 step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, "foo", {
            value: 11,
            configurable: false
        });

        try {
            Object.defineProperty(obj, "foo", {
                value: 12,
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && obj.foo === 11;
        }
    }
runTestCase(testcase);
