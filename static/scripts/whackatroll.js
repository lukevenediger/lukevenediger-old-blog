(function (target, statsd) {

  var movesPerGame = 10;
  var movesLeft = 0;
  var timeToHideTroll = 1000;
  var flashTime = 300
  var hits = 0;
  var best = 0;

  $('div.game div.box').click(function (e) {
    var box = $(this);
    if (box.hasClass('troll')) {
      var startTime = parseInt(box.attr('data-showTime'), 10);
      var latency = new Date().getTime() - startTime;
      statsd.timing('game.hit.troll', latency);
      statsd.count('game.hit.troll');

      hits += 1;
      // Show the explosion
      box.removeClass('troll').addClass('explosion');
      setTimeout(function () {
        box.removeClass('explosion').addClass('waiting');
        nextMove();
      }, flashTime);
    } else if (box.hasClass('waiting')) {
      statsd.count('game.hit.waiting');
    }
  });

  $('div.game-over').click(function (e) {
    $('div.game').show();
    $('div.game-over').hide();
    nextMove();
  });

  var showTroll = function (boxNumber) {
    var box = $('#box' + boxNumber);
    statsd.count("game.box.troll." + boxNumber);

    // Show the troll face
    box.removeClass('explosion waiting troll').addClass('troll');
    // Set the time for a latency measurement
    box.attr('data-showTime', new Date().getTime());

    // Set a timeout to close the box if not hit
    var reference = setTimeout(function () {
      if (box.hasClass('troll')) {
        box.removeClass('troll').addClass('troll-lol');
        setTimeout(function () {
          box.removeClass('troll-lol').addClass('waiting');
          nextMove();
        }, flashTime);
      }
    }, timeToHideTroll);
    box.attr('data-waithandle', reference);
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var gameOver = function () {
    $('div.game').hide();
    $('div.game-over').show();
    hits = 0;
    movesLeft = movesPerGame;
  };

  var nextMove = function () {
    // Show the scores
    if (hits > best) {
      best = hits;
      $('span.best').text(best);
    }
    $('span.hits').text(hits);

    if (movesLeft > 0) {
      setTimeout(function () {
        showTroll(getRandomInt(1, 6));
      }, getRandomInt(100, 700));
    } else {
      gameOver();
    }
    movesLeft -= 1;
  };

  $(function () {
    movesLeft = movesPerGame;
    nextMove();
  });

}(window, window.statsd));
// Disable touch move
document.ontouchmove = function (e) { e.preventDefault(); }