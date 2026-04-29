export function renderArticles(articles) {
  const container = document.querySelector("#app");

  articles.forEach(article => {
    const html = `
      <div class="card">
        <h2>${article.title}</h2>
        <a href="${article.url}" target="_blank">Leggi</a>
        <p>${new Date(article.time * 1000).toLocaleDateString()}</p>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", html);
  });
}