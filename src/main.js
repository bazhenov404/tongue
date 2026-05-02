import {init, loadMore} from './controllers/newsController.js';

import { getNewStoriesIds } from "./services/hackerNewsApi";

getNewStoriesIds().then(ids => {
  console.log(ids.slice(0, 10));
});

document.querySelector('#app').innerHTML = `
    <h1 class="app-title">Tongue Tech</h1>
    <div id='news'></div>
    <button id='loadMore'>Load More</button>`;

init();

document.querySelector('#loadMore').addEventListener('click', loadMore);

