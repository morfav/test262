// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-2
description: >
    Array.prototype.reduceRight considers new value of elements in
    array after it is called
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(prevVal, curVal, idx, obj)
  {
    arr[3] = -2;
    arr[0] = -1;
    return prevVal + curVal;
  }

  var arr = [1,2,3,4,5];
  if(arr.reduceRight(callbackfn) === 13)
    return true;  
  
 }
runTestCase(testcase);
