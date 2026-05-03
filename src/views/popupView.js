export function showPopup(insight) {
  const html = `
    <div class="popup-overlay">
      <div class="popup">
        <h3>${insight.title}</h3>
        <p>${insight.text}</p>
        <button id="closePopup">Chiudi</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);
}