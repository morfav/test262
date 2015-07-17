// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-457
description: >
    ES5 Attributes - fail to update the accessor property ([[Get]] is
    undefined, [[Set]] is undefined, [[Enumerable]] is false,
    [[Configurable]] is false) to a data property
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: false
        });
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                value: 1001
            });

            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

            return desc1.hasOwnProperty("get") && !desc2.hasOwnProperty("value") && e instanceof TypeError;
        }
    }
runTestCase(testcase);
