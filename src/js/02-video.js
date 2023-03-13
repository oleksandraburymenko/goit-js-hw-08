import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(() => {
  const currentTime = player.currentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

player.on('ready', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});