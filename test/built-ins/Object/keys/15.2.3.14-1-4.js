// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-1-4
description: >
    Object.keys throws TypeError if type of first param is not Object
    (null)
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    Object.keys(null);
  }
  catch (e) {
    if (e instanceof TypeError) {
      return true;
    }
  }
 }
runTestCase(testcase);
