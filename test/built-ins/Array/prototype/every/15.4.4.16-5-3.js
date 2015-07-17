// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-5-3
description: Array.prototype.every - thisArg is Array
includes: [runTestCase.js]
---*/

function testcase() {
  var res = false;
  var a = new Array();
  a.res = true;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }

  var arr = [1];

  if(arr.every(callbackfn, a) === true)
    return true;    

 }
runTestCase(testcase);
