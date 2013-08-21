(function (target, statsd) {

  var movesPerGame = 10;
  var movesLeft = 0;
  var timeToHideTroll = 2000;
  var flashTime = 300
  var hits = 0;
  var best = 0;
  var testGroup;

  $('div.game div.box').click(function (e) {
    var box = $(this);
    if (box.hasClass('troll')) {
      var startTime = parseInt(box.attr('data-showTime'), 10);
      var latency = new Date().getTime() - startTime;
      statsd.timing('wat.hit.troll', latency);
      statsd.timing('wat.' + testGroup + '.hit.troll', latency);
      statsd.count('wat.hit.troll');
      statsd.count('wat.' + testGroup + '.hit.troll');
      statsd.count('wat.hit.box.' + box.attr('data-boxNumber'));

      hits += 1;
      // Show the explosion
      box.removeClass('troll').addClass('explosion');
      setTimeout(function () {
        box.removeClass('explosion').addClass('waiting');
        nextMove();
      }, flashTime);
    } else {
      statsd.count('wat.hit.other');
    }
  });

  $('div.game-over').click(function (e) {
    $('div.game').show();
    $('div.game-over').hide();
    startGame();
  });

  var startGame = function () {
    statsd.count('wat.game.start');
    $('div.game').attr('data-game-start', new Date().getTime());
    nextMove();
  };

  var showTroll = function (boxNumber) {
    var box = $('#box' + boxNumber);
    statsd.count("wat.box.troll." + boxNumber);

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
    statsd.count('wat.game.end');
    var gameDuration = new Date().getTime() - $('div.game').attr('data-game-start');
    statsd.timing('wat.game', gameDuration);
    statsd.timing('wat.' + testGroup + '.game', gameDuration);
  };

  var nextMove = function () {
    // Show the scores
    if (hits > best) {
      best = hits;
      $('span.best').text(best);
    }
    $('span.hits').text(hits);
    statsd.count('wat.move');

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
    // Determine the test group
    if (getRandomInt(1, 10) >= 4) {
      testGroup = "a";
    } else {
      $('div.game').addClass('game-b');
      testGroup = "b";
    }
    statsd.count('wat.testgroup.' + testGroup);
    
    movesLeft = movesPerGame;
    startGame();
  });

}(window, window.statsd));
// Disable touch move
document.ontouchmove = function (e) { e.preventDefault(); }
