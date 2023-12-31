'use strict';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(time) {
  localStorage.setItem(CURRENT_TIME, time.seconds);
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);
