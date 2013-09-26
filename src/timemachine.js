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

      dateString: 'Wed Dec 25 1991 13:12:59 GMT',

      apply: function () {
        var self = this;
        Date.prototype = OriginalDate.prototype;
        Date = function () {
          if (arguments.length === 1) {
            return new OriginalDate(arguments[0]);
          } else if (arguments.length === 7) {
            return new OriginalDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
          } else {
            return new OriginalDate(self.dateString);
          }
        };
        Date.now = function () {
          var date = new OriginalDate(self.dateString);
          return date.getTime();
        };
      },

      config: function (options) {
        this.dateString = options.dateString || this.dateString;
      },

      reset: function() {
        Date = OriginalDate;
      }

    };

  Timemachine.apply();

  return Timemachine;

});