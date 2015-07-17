// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-i-13
description: >
    Array.prototype.every - element to be retrieved is own accessor
    property that overrides an inherited accessor property on an
    Array-like object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return val === 6;
            } else {
                return true;
            }
        }

        var proto = {};

        Object.defineProperty(proto, "1", {
            get: function () {
                return 6;
            },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 10;

        Object.defineProperty(child, "1", {
            get: function () {
                return 12;
            },
            configurable: true
        });


        return !Array.prototype.every.call(child, callbackfn);
    }
runTestCase(testcase);
