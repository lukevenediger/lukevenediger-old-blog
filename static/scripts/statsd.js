(function (target) {

  var timing = function (name, milliseconds) {

  };

  var count = function (name, value) {
    value = value || 1;
  }

  target.statsd = {
    timing: timing,
    count: count
  };

}(window));