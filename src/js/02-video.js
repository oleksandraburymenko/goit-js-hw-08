import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const script = document.createElement('script');
script.src = 'https://player.vimeo.com/api/player.js';
document.body.appendChild(script);

script.onload = () => {
  const player = new Player(iframe);

  player.on('timeupdate', throttle(() => {
    const readyPlayer = player.getReady();
    if (readyPlayer) {
      const currentTime = player.currentTime();
      localStorage.setItem('videoplayer-current-time', currentTime);
    }
  }, 1000));

  player.on('ready', () => {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
      player.setCurrentTime(currentTime);
    }
  });
};