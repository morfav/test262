// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.5.4_2-74gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (strict function declaration called by
    Function.prototype.bind(globalObject)())
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/

function f() { "use strict"; return gNonStrict();};

assert.throws(TypeError, function() {
    f.bind(fnGlobalObject())();
});

function gNonStrict() {
    return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
