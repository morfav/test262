// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.14-12
description: catch introduces scope - name lookup finds property
includes: [runTestCase.js]
---*/

function testcase() {
  function f(o) {

    function innerf(o) {
      try {
        throw o;
      }
      catch (e) {
        return e.x;
      }
    }

    return innerf(o);
  }
  
  if (f({x:42}) === 42) {
    return true;
  }
 }
runTestCase(testcase);
