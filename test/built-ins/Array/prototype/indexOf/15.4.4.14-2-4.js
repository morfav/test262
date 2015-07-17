// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-4
description: >
    Array.prototype.indexOf - 'length' is own data property that
    overrides an inherited data property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var targetObj = {};
        var arrProtoLen;

        try {
            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;

            return [0, targetObj].indexOf(targetObj) === 1;

        } finally {

            Array.prototype.length = arrProtoLen;
        }
    }
runTestCase(testcase);
