// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-184
description: >
    Object.defineProperties - TypeError is thrown if 'O' is an Array,
    'P' is an array index named property,[[Writable]] attribute of the
    length property in 'O' is false, value of 'P' is equal to value of
    the length property in 'O' (15.4.5.1 step 4.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [1, 2, 3];

        Object.defineProperty(arr, "length", {
            writable: false
        });

        try {
            Object.defineProperties(arr, {
                "3": {
                    value: "abc"
                }
            });

            return false;
        } catch (e) {
            return e instanceof TypeError && arr[0] === 1 &&
                arr[1] === 2 && arr[2] === 3 && !arr.hasOwnProperty("3");
        }
    }
runTestCase(testcase);
