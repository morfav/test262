// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-23
description: >
    Object.defineProperty - 'name' is existing an inherited data
    property (8.12.9 step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "foo", {
            value: 11,
            configurable: false
        });

        var ConstructFun = function () {};
        ConstructFun.prototype = proto;
        var obj = new ConstructFun();

        Object.defineProperty(obj, "foo", {
            configurable: true
        });
        return obj.hasOwnProperty("foo") && (typeof obj.foo) === "undefined";
    }
runTestCase(testcase);
