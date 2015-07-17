// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.1.1-g6-2
description: >
    The JSON lexical grammer allows '' as a JSONEscapeCharacter after
    '' in a JSONString
includes: [runTestCase.js]
---*/

function testcase() {
    return JSON.parse('"\\\\"')==='\\'; 
  }
runTestCase(testcase);
