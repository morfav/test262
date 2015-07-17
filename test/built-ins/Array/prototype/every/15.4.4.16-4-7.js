// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-4-7
description: >
    Array.prototype.every throws TypeError if callbackfn is Object
    without a Call internal method
includes: [runTestCase.js]
---*/

function testcase() {

  var arr = new Array(10);
  try {
    arr.every( {} );    
  }
  catch(e) {
    if(e instanceof TypeError)
      return true;  
  }

 }
runTestCase(testcase);
