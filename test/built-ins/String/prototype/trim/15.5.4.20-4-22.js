// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-22
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u0020abc\u0020)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("\u0020abc\u0020".trim() === "abc") {
    return true;
  }
 }
runTestCase(testcase);
