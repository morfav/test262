// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-522
description: >
    ES5 Attributes - [[Set]] attribute of accessor property ([[Get]]
    is a Function, [[Set]] is undefined, [[Enumerable]] is false,
    [[Configurable]] is false) is undefined
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: false,
            configurable: false
        });

        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return propertyDefineCorrect && typeof desc.set === "undefined";
    }
runTestCase(testcase);
