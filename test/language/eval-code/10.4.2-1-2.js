// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.2-1-2
description: >
    Indirect call to eval has context set to global context (nested
    function)
includes: [runTestCase.js]
---*/

var __10_4_2_1_2 = "str";
function testcase() {
            var _eval = eval;
            var __10_4_2_1_2 = "str1";
            function foo() {
                var __10_4_2_1_2 = "str2";
                if(_eval("\'str\' === __10_4_2_1_2") === true &&  // indirect eval
                    eval("\'str2\' === __10_4_2_1_2") === true) {   // direct eval
                    return true;
                } else {
                    return false;
                }
            }
            return foo();
    }
runTestCase(testcase);
