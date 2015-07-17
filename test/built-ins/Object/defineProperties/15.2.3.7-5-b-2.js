// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-2
description: Object.defineProperties - 'descObj' is null (8.10.5 step 1)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
      
        try {
            Object.defineProperties(obj, {
                prop: null
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && !obj.hasOwnProperty("prop"); ;
        }
    }
runTestCase(testcase);
