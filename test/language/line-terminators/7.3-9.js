// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.3-9
description: >
    7.3 - ES5 recognizes the character <LS> (\u2028) as a
    NonEscapeCharacter
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            eval("var prop = \\u2028;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
