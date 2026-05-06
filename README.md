# Tongue Tech

Applicazione frontend sviluppata in JavaScript (Vite) che integra le API di Hacker News per visualizzare news in tempo reale.
Link: https://tongue-app.netlify.app

---

## Funzionalità

- Visualizzazione ultime news Hacker News
- Caricamento progressivo (Load More)
- Sistema di bookmark con salvataggio in localStorage
- Popup informativo dopo avvio app
- UI responsive mobile-first
- Loader durante fetch dati

---

## Architettura e Design Pattern

L'applicazione è strutturata seguendo un pattern MVC (Model–View–Controller), che consente di separare chiaramente le responsabilità tra le diverse parti del sistema.

- **Model**: gestisce lo stato dell'applicazione (articles, bookmarks)
- **View**: si occupa del rendering dell'interfaccia utente
- **Controller**: coordina la logica applicativa e gestisce gli eventi

Inoltre, è stato introdotto un **service layer** per isolare le chiamate API (Hacker News), migliorando la manutenibilità e la testabilità del codice.

Questo approccio riduce l'accoppiamento tra i componenti e rende l'applicazione più scalabile e facile da mantenere.

Il progetto segue un'architettura modulare:

- **controllers/** → logica applicativa
- **services/** → chiamate API (Hacker News)
- **models/** → stato globale (articles, bookmarks)
- **views/** → rendering UI
- **utils/** → funzioni di supporto

---

## API utilizzata

- Hacker News API  
https://github.com/HackerNews/API

Flusso:
1. recupero IDs news
2. fetch dettagli per ogni ID

---

## UI/UX

- design mobile-first
- animazioni hover card
- sistema bookmark con feedback visivo
- loader per migliorare UX

---

## Testing

Il progetto utilizza Vitest per test automatici:

- formatDate
- api test

Eseguire i test:

```bash
npm run test
