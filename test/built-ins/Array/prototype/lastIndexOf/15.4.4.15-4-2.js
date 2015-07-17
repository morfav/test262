// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-4-2
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0 ( length
    overridden to null (type conversion))
includes: [runTestCase.js]
---*/

function testcase() {
  
  var i = Array.prototype.lastIndexOf.call({length: null}, 1);
  
  if (i === -1) {
    return true;
  }
 }
runTestCase(testcase);
