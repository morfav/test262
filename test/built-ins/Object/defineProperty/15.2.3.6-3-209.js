// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-209
description: >
    Object.defineProperty - 'get' property in 'Attributes' is own data
    property that overrides an inherited data property (8.10.5 step
    7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var proto = {
            get: function () {
                return "inheritedDataProperty";
            }
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        child.get = function () {
            return "ownDataProperty";
        };

        Object.defineProperty(obj, "property", child);

        return obj.property === "ownDataProperty";
    }
runTestCase(testcase);
