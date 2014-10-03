var assert = require('assert');

var blocklike = require('../index');


describe('blocklike', function(){

  it('Module definition', function(){
    assert(typeof blocklike === 'function');
  });

  it('Wrap a function', function(){
    var func = function(a, b, cb){
      return Array.prototype.slice.apply(arguments);
    };
    var cb = function(){};

    assert.deepEqual(
      func(2, 3, cb),
      [2, 3, cb]
    );

    var wrapped = blocklike(func);
    assert.deepEqual(
      wrapped(2, 3, cb),
      [2, 3, cb]
    );
    // b arg is omitted
    assert.deepEqual(
      wrapped(2, cb),
      [2, undefined, cb]
    );
    // a, b args are omitted
    assert.deepEqual(
      wrapped(cb),
      [undefined, undefined, cb]
    );
  });

  it('Should do nothing if callback was not given at the end of args', function(){
    var wrapped = blocklike(function(a, b, c, cb){
      return Array.prototype.slice.apply(arguments);
    });
    var foo = function(){};
    assert.deepEqual(
      wrapped(foo, 3),
      [foo, 3]
    );
  });

  it('Should keep dynamic scope', function(){
    var wrapped = blocklike(function(a, b, cb){
      return cb(this.x * a * b);
    });

    var obj = {
      x: 2,
      f: wrapped
    };
    assert(
      obj.f(3, 4, function(total){ return total; }) === 24
    );
  });
});
