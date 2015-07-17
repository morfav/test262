// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-20
description: >
    Array.prototype.lastIndexOf - value of 'length' is an Object which
    has an own valueOf method
includes: [runTestCase.js]
---*/

function testcase() {

        //valueOf method will be invoked first, since hint is Number
        var obj = {
            1: true,
            2: 2,

            length: {
                valueOf: function () {
                    return 2;
                }
            }
        };

        return Array.prototype.lastIndexOf.call(obj, true) === 1 &&
            Array.prototype.lastIndexOf.call(obj, 2) === -1;
    }
runTestCase(testcase);
