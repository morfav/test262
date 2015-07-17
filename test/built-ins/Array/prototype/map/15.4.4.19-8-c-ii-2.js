// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-ii-2
description: Array.prototype.map - callbackfn takes 3 arguments
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var parCnt = 3;
  var bCalled = false
  function callbackfn(val, idx, obj)
  { 
    bCalled = true;
    if(arguments.length !== 3)
      parCnt = arguments.length;   //verify if callbackfn was called with 3 parameters
  }

  var srcArr = [0,1,2,3,4,5,6,7,8,9];
  var resArr = srcArr.map(callbackfn);
  if(bCalled === true && parCnt === 3)
    return true;


 }
runTestCase(testcase);
