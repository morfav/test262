// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 14.1-17-s
description: >
    'use strict' directive - not recognized if it follow some other
    statment empty statement
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {

  function foo()
  {
    var x;
    'use strict';
    return (this !== undefined);
  }

  return foo.call(undefined);
 }
runTestCase(testcase);
