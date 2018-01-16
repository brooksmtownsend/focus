var timerGoing = false;
document.getElementById('work').addEventListener('keydown', function(e){
  var top = document.getElementById('left');
  if (e.key == "Enter") {
    top.innerHTML = "It's time to work on <span style='color: red'>" +  this.value + '</span>. You have committed yourself to this amount of time before a break.';
    if (!timerGoing) {
      var interval = Math.random() * 3600;
      interval = interval < 900 ? 900 : interval;
      startTimer(interval, document.getElementById('right'));
    }
  }
});

function startTimer(duration, display) {
  timerGoing = true;
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(this);
    }

  }, 1000);
}
