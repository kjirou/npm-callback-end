wantit [![Build Status](https://travis-ci.org/kjirou/npm-wantit.svg?branch=master)](https://travis-ci.org/kjirou/npm-wantit)
======

Execute "require" without MODULE_NOT_FOUND error.


## Examples
```
var wantit = require('wantit');

// Return "util" module like "require" method
var util = wantit('util');

// Error is not occured, it returns null
var moduleNotFound = wantit('module_not_found');
```


## Installation
```
npm install wantit
```
