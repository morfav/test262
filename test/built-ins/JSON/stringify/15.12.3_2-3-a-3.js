// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3_2-3-a-3
description: >
    JSON.stringify converts Boolean wrapper objects returned from
    replacer functions to literal numbers.
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify([42], function(k,v) {return v===42? new Boolean(false):v}) === '[false]';
  }
runTestCase(testcase);
