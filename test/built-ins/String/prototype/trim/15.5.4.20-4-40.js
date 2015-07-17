// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-40
description: >
    String.prototype.trim handles whitepace and lineterminators
    (ab\u00A0c)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("ab\u00A0c".trim() === "ab\u00A0c") {
    return true;
  }
 }
runTestCase(testcase);
