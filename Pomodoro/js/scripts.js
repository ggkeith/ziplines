var time = 25;
var running = 0;

function start() {
  if( running === 0) {
    running = 1;
    increment();
    document.getElementById("start").innerHTML = "Pause";
  } else {
    running = 0;
    document.getElementById("start").innerHTML = "Resume";
  }
}

function reset() {
  running = 0;
  time = 0
  document.getElementById("start").innerHTML = "Start";
  document.getElementById("time").innerHTML = "00:00:00";
}

function increment() {
  if (running === 1) {
    setTimeout(function() {
          time--;
          var mins = Math.floor(time / 10 / 60);
          var secs = Math.floor(time / 10);
          var tenths = time % 10;

          if (mins < 10) {
            mins = "0" + mins;
          }
          if (secs <10) {
            secs = "0" + secs;
          }
          document.getElementById("timer").innerHTML = mins + ":" + secs + ":" + "0" +  tenths;
      increment();
    }, 100);
  }
}
