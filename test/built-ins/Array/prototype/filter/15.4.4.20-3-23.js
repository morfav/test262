// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-3-23
description: >
    Array.prototype.filter uses inherited valueOf method when 'length'
    is an object with an own toString and inherited valueOf methods
includes: [runTestCase.js]
---*/

function testcase() {

        var valueOfAccessed = false;
        var toStringAccessed = false;

        function callbackfn(val, idx, obj) {
            return true;
        }

        var proto = {
            valueOf: function () {
                valueOfAccessed = true;
                return 2;
            }
        };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();

        child.toString = function () {
            toStringAccessed = true;
            return '1';
        };

        var obj = {
            1: 11,
            2: 9,
            length: child
        };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 1 && newArr[0] === 11 && valueOfAccessed && !toStringAccessed;
    }
runTestCase(testcase);
