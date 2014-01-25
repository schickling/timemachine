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

  var OriginalDate = Date,
    Timemachine = {

      timestamp: 0,
      tick: false,
      difference: 0,

      config: function (options) {
        this.timestamp = OriginalDate.parse(options.dateString) || this.timestamp;
        this._apply();
      },

      reset: function() {
        Date = OriginalDate;
        Date.prototype = OriginalDate.prototype;
      },

      _apply: function () {
        var self = this;

        Date = function () {
          var date;
          if (arguments.length === 1) {
            date = new OriginalDate(arguments[0]);
          } else if (arguments.length === 7) {
            date = new OriginalDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
          } else {
            date = new OriginalDate(self.timestamp);
          }
          return date;
        };

        Date.prototype = OriginalDate.prototype;
        Date.now = function () {
          return self.timestamp;
        };

      },

    };

  Timemachine._apply();

  return Timemachine;

});