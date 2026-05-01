import {formatDate} from '../utils/formatDate.js';

export function renderArticles(articles) {
  const container = document.querySelector("#news");

  articles.forEach(article => {
    const html = `
      <div class="card">
        <h2>${article.title || 'Titolo non disponibile'}</h2>
        <a href="${article.url || '#'}" target="_blank">Leggi articolo</a>
        <p>${formatDate(article.time)}</p>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", html);
  });
}