// Clock
function updateTime() {
  const timeElement = document.querySelector('.time');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  timeElement.textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();

// Animated Speed & RPM
let speed = 0;
let rpm = 0;

const needle = document.querySelector('.needle');
const needleRPM = document.querySelector('.needle-rpm');
const speedText = document.querySelector('.speed-text');
const rpmText = document.querySelector('.rpm-text');

function animateDashboard(targetSpeed, targetRPM) {
  const interval = setInterval(() => {
    if (speed < targetSpeed) speed++;
    if (rpm < targetRPM) rpm += 50;

    needle.style.transform = `rotate(${(speed/200)*270 - 135}deg)`; // speed from 0-200 km/h
    needleRPM.style.transform = `rotate(${(rpm/8000)*270 - 135}deg)`; // rpm from 0-8000
    speedText.textContent = `${speed} km/h`;
    rpmText.textContent = `${rpm} RPM`;

    if (speed >= targetSpeed && rpm >= targetRPM) clearInterval(interval);
  }, 20);
}

// Start demo values
animateDashboard(120, 3000);
