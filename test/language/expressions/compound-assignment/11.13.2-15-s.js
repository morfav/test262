// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.2-15-s
description: >
    ReferenceError isn't thrown if the LeftHandSideExpression of a Compound
    Assignment operator(>>>=) evaluates to a resolvable reference
includes: [runTestCase.js]
---*/

function testcase() {
        var _11_13_2_15 = 8
        _11_13_2_15 >>>= 2;
        return _11_13_2_15 === 2;
    }
runTestCase(testcase);
