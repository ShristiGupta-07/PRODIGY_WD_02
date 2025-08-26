let startTime, updatedTime, difference, tInterval;
let running = false;

function startStop() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(getShowTime, 1000);
    running = true;
  } else {
    clearInterval(tInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  document.getElementById('display').innerHTML = "00:00:00";
  document.getElementById('laps').innerHTML = "";
  running = false;
  difference = 0;
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

  document.getElementById('display').innerHTML =
    ${pad(hours)}:${pad(minutes)}:${pad(seconds)};
}

function pad(unit) {
  return ('0' + unit).slice(-2);
}

function lap() {
  const lapTime = document.getElementById('display').innerText;
  const li = document.createElement('li');
  li.innerText = Lap: ${lapTime};
  document.getElementById('laps').appendChild(li);
}
