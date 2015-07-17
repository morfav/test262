// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-3
description: Array.prototype.lastIndexOf applied to boolean primitive
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Boolean.prototype[1] = true;
            Boolean.prototype.length = 2;

            return 1 === Array.prototype.lastIndexOf.call(true, true);
        } finally {
            delete Boolean.prototype[1];
            delete Boolean.prototype.length;
        }
    }
runTestCase(testcase);
