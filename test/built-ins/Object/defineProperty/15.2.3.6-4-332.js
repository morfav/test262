// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-332
description: >
    ES5 Attributes - success to update the data property ([[Writable]]
    is true, [[Enumerable]] is true, [[Configurable]] is true) to an
    accessor property
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: true
        });
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        function getFunc() {
            return 20;
        }
        Object.defineProperty(obj, "prop", {
            get: getFunc
        });
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return desc1.hasOwnProperty("value") && desc2.get === getFunc;
    }
runTestCase(testcase);
