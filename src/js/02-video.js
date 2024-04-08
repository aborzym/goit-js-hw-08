import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);
if (localStorage.key('videoplayer-current-time'))
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const delayedTimeUpdate = throttle((data) => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 999);

player.on('timeupdate', (data) => {
  delayedTimeUpdate(data);
});
