// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-171
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the [[Configurable]] attribute of
    inherited accessor property with large index named in 'O' can't
    stop deleting index named properties (15.4.5.1 step 3.l.ii)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1];
        try {
            Object.defineProperty(Array.prototype, "1", {
                get: function () {
                    return 1;
                },
                configurable: true //we are not allowed to set the [[Configurable]] attribute of property "1" to false here, since Array.prototype is a global object, and non-configurbale property can't revert to configurable
            });

            Object.defineProperties(arr, {
                length: {
                    value: 1
                }
            });

            return arr.length === 1 && !arr.hasOwnProperty("1") && arr[0] === 0 && Array.prototype[1] === 1;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
