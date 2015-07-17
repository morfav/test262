// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-ii-4-s
description: >
    Array.prototype.reduce - undefined passed as thisValue to strict
    callbackfn
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() { 
  var innerThisCorrect = false;
  function callbackfn(prevVal, curVal, idx, obj)
  { 
     "use strict";
     innerThisCorrect = this===undefined;
     return true;
  }
  [0].reduce(callbackfn,true);
  return innerThisCorrect;    
 }
runTestCase(testcase);
