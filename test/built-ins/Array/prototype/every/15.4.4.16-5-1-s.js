// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-5-1-s
description: Array.prototype.every - thisArg not passed to strict callbackfn
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  var innerThisCorrect = false;

  function callbackfn(val, idx, obj) {
    "use strict";
    innerThisCorrect = this===undefined;
    return true;
  }

  [1].every(callbackfn);
  return innerThisCorrect;
 }
runTestCase(testcase);
