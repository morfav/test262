// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-184
description: >
    Object.getOwnPropertyDescriptor returns undefined for non-existent
    property (caller) on built-in object (Math)
includes: [runTestCase.js]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(Math, "caller");

  if (desc === undefined)
    return true;  
  else
    return false;
 }
runTestCase(testcase);
