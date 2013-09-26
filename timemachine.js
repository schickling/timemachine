(function (name, definition) {
  if (typeof define === 'function') { // AMD
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = definition();
  } else { // Browser
    var timemachine = definition(),
      global = this,
      old = global[name];
    timemachine.noConflict = function () {
      global[name] = old;
      return timemachine;
    };
    global[name] = timemachine;
  }
})('timemachine', function () {

  var WindowDate = window.Date,
    Timemachine = {

      dateString: 'December 24, 1990 12:25:00',

      apply: function () {
        var self = this;
        window.Date = function () {
          if (arguments.length) {

          } else {
            return new WindowDate(self.dateString);
          }
        };
      },

      config: function (options) {
        this.dateString = options.dateString || this.dateString;
      }

    };

  Timemachine.apply();

  return Timemachine;

});