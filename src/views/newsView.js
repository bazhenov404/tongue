import {formatDate} from '../utils/formatDate.js';
import {state} from '../models/newsModel.js';



export function renderArticles(articles) {
  const container = document.querySelector("#news");

  articles.forEach(article => {
  const isBookmarked = state.bookmarks.some(
    b => b.id == article.id
  );
    const html = `
      <div class="card">
        <h2>${article.title || 'Titolo non disponibile'}</h2>
        <button class="bookmark ${isBookmarked ? "active" : ""}" data-id="${article.id}">⭐</button></a>
        <a href="${article.url || '#'}" target="_blank">Leggi articolo </a>
        <p>${formatDate(article.time)}</p>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", html);
  });
}