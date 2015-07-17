// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.9-9-b-i_2
description: >
    Redefine a configurable data property to be an accessor property
    on a newly non-extensible object
includes: [runTestCase.js]
---*/

function testcase() {
    var o = {};
    Object.defineProperty(o, "foo", 
                          { value: "hello", 
                            configurable: true,
                            enumerable: true,
                            writable: true});
    Object.preventExtensions(o);
    Object.defineProperty(o, "foo", { get: function() { return 5;} });

    var fooDescrip = Object.getOwnPropertyDescriptor(o, "foo");
    return o.foo===5 && fooDescrip.get!==undefined && fooDescrip.set===undefined && fooDescrip.value===undefined && fooDescrip.configurable===true && fooDescrip.enumerable===true && fooDescrip.writable===undefined;
}
runTestCase(testcase);
