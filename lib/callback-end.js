module.exports = function blocklike(func){
  return function(){
    var args = Array.prototype.slice.apply(arguments);
    var callback = args[args.length - 1];
    if (typeof callback === 'function') {
      while (args.length < func.length) {
        args.splice(args.length - 1, 0, undefined);
      }
    }
    return func.apply(this, args);
  };
};
