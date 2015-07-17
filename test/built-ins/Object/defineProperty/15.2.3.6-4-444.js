// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-444
description: >
    ES5 Attributes - success to update [[Get]] attribute of accessor
    property ([[Get]] is undefined, [[Set]] is undefined,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: true
        });

        var result1 = typeof obj.prop === "undefined";
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        Object.defineProperty(obj, "prop", {
            get: getFunc
        });

        var result2 = obj.prop === 1001;
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return result1 && result2 && typeof desc1.get === "undefined" && desc2.get === getFunc;
    }
runTestCase(testcase);
