(function (target) {
  
  var _statsdCollectorURL;
  var _pumpIntervalMS;
  var _outputBuffer = [];
  var _lastRequestLatency;

  var pump = function () {
    if (_outputBuffer.length > 0) {
      if (_lastRequestLatency) {
        timing('wat.client.post', _lastRequestLatency);
      }
      var requestStart = new Date().getTime();
      var data = _outputBuffer.join('\n');
      _outputBuffer = [];
      $.post(_statsdCollectorURL,
        data,
        function () {
          _lastRequestLatency = new Date().getTime() - requestStart;
          setTimeout(pump, _pumpIntervalMS);
        },
        'text');
    }
    setTimeout(pump, _pumpIntervalMS);
  };

  var timing = function (name, milliseconds) {
    _outputBuffer.push(name + ':' + milliseconds + '|ms');
  };

  var count = function (name, value) {
    value = value || 1;
    _outputBuffer.push(name + ':' + value + '|c');
  };

  var configure = function (properties) {
    _statsdCollectorURL = properties.statsdCollectorURL;
    _pumpIntervalMS = properties.pumpIntervalMS;
  };

  target.statsd = {
    configure: configure,
    timing: timing,
    count: count,
    pump: pump
  };

}(window));