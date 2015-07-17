// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-117
description: >
    Object.defineProperty - 'O' is an Array, test the length property
    of 'O' is own data property that overrides an inherited data
    property (15.4.5.1 step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [0, 1, 2];
        var arrProtoLen;

        try {
            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;

            
            Object.defineProperty(arrObj, "2", {
                configurable: false
            });

            Object.defineProperty(arrObj, "length", {
                value: 1
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && arrObj.length === 3 && Array.prototype.length === 0;
        } finally {
            Array.prototype.length = arrProtoLen;
        }
    }
runTestCase(testcase);
