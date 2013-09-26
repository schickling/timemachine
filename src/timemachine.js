(function (name, definition){
  if (typeof define === 'function'){ // AMD
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = definition();
  } else { // Browser
    var timemachine = definition(), global = this, old = global[name];
    timemachine.noConflict = function () {
      global[name] = old;
      return timemachine;
    };
    global[name] = timemachine;
  }
})('timemachine', function () {

  // return the module's API
  return {};

});