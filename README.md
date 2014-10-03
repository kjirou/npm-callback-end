callback-end
============

By wrapping the function that sets the last callback, so that you can omit the argument when calling.


## Installation
```
npm install callback-end
```


## Examples
```
var callbackEnd = require('callback-end');


var func = function(foo, bar, cb){
  return Array.prototype.slice.apply(arguments);
};

var wrapped = callbackEnd(func);

console.log(
  wrapped(1, 2, function(){})  // -> [1, 2, function(){}]
);

// Omit a "foo" arg
console.log(
  wrapped(1, function(){})  // -> [1, undefined, function(){}]
);

// Omit "foo" and "bar" args
console.log(
  wrapped(function(){})  // -> [undefined, undefined, function(){}]
);
```
