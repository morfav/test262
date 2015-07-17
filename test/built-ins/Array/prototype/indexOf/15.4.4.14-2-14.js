// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-14
description: Array.prototype.indexOf - 'length' is undefined property
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: true, 1: true };

        return Array.prototype.indexOf.call(obj, true) === -1;
    }
runTestCase(testcase);
