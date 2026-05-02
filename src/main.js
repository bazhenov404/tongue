import {init, loadMore} from './controllers/newsController.js';
import { getNewStoriesIds } from "./services/hackerNewsApi";
import {state} from './models/newsModel.js';


getNewStoriesIds().then(ids => {
  console.log(ids.slice(0, 10));
});

document.querySelector('#app').innerHTML = `
    <h1 class="app-title">Tongue Tech</h1>
    <div id='news'></div>
    <button id='loadMore'>Load More</button>`;

const saved = localStorage.getItem("bookmarks");

if (saved) {
  state.bookmarks = JSON.parse(saved);
}

init();

document.querySelector('#loadMore').addEventListener('click', loadMore);

//bookmark logic//
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bookmark")) {
    const button = e.target;
    const id = button.dataset.id;

    const article = state.articles.find(a => a.id == id);

    const exists = state.bookmarks.some(a => a.id == id);

    if (exists) {
      state.bookmarks = state.bookmarks.filter(a => a.id != id);
      button.classList.remove("active");
    } else {
      state.bookmarks.push(article);
      button.classList.add("active");
    }

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(state.bookmarks)
    );
  }
});

