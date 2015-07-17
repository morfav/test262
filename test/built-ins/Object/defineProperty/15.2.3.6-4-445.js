// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-445
description: >
    ES5 Attributes - success to update [[Set]] attribute of accessor
    property ([[Get]] is undefined, [[Set]] is undefined,
    [[Enumerable]] is false, [[Configurable]] is true) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: true
        });

        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
        var propertyDefineCorrect = obj.hasOwnProperty("prop");

        Object.defineProperty(obj, "prop", {
            set: setFunc
        });

        obj.prop = "overrideData";
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return typeof desc1.set === "undefined" && propertyDefineCorrect && desc2.set === setFunc && verifySetFunc === "overrideData";
    }
runTestCase(testcase);
