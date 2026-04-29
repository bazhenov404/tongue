import {init, loadMore} from './controllers/newsController.js';

document.querySelector('#app').innerHTML = `
    <h1>Tongue Tech</h1>
    <div id='news'></div>
    <button id='loadMore'>Load More</button>`;

init();

document.querySelector('#loadMore').addEventListener('click', loadMore);