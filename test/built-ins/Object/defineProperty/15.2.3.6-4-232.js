// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-232
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, the [[Set]] field of 'desc' and the [[Set]] attribute
    value of 'name' are two objects which refer to the same object
    (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

function setFunc(value) {
    arrObj.setVerifyHelpProp = value;
}

Object.defineProperty(arrObj, "0", { set: setFunc });

Object.defineProperty(arrObj, "0", { set: setFunc });
verifyWritable(arrObj, "0", "setVerifyHelpProp");

verifyNotEnumerable(arrObj, "0");

verifyNotConfigurable(arrObj, "0");
