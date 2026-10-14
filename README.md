# Dizionatore

Piccola web app per scoprire la pronuncia corretta delle parole italiane: scrivi una parola o una frase e ottieni ogni parola con l'accento giusto (es. *sera* → **séra**, *bella* → **bèlla**).

**Prova l'app:** [dizionatore.vercel.app](https://dizionatore.vercel.app/)

<p>
  <img src="docs/screenshot-chiaro.jpg" alt="Dizionatore, tema chiaro" width="240">
  <img src="docs/screenshot-scuro.jpg" alt="Dizionatore, tema scuro" width="240">
</p>

## Perché

[dizionatore.it](https://www.dizionatore.it) è un ottimo servizio per la dizione italiana, ma è scomodo da consultare al volo dal telefono. Questa app ne offre un'interfaccia essenziale, pensata per il mobile e installabile sulla schermata home.

## Funzionalità

- Analisi di parole singole o frasi intere, con la dizione di ogni parola.
- Segnalazione delle parole **ambigue**, che cambiano pronuncia a seconda del significato.
- Cronologia delle ricerche (fino a 50 parole), ordinabile per **più cercate** o **recenti**, con eliminazione delle singole voci. Resta solo nel browser.
- Tema chiaro e scuro automatico, in base alle impostazioni del dispositivo.
- Installabile come app (PWA) su telefono e desktop.

## Come funziona

L'app è una singola pagina HTML con CSS e JavaScript scritti a mano, senza framework.

Le ricerche passano da una piccola funzione serverless ([`api/proxy.js`](api/proxy.js)) che inoltra la richiesta a dizionatore.it e restituisce la risposta. Serve perché il browser non può chiamare direttamente il servizio da un altro dominio.

```
index.html      interfaccia, logica di ricerca e cronologia
api/proxy.js    funzione serverless (Vercel) che inoltra le richieste a dizionatore.it
sw.js           service worker per l'installazione come PWA
manifest.json   nome, icona e colori dell'app installata
```

## Sviluppo in locale

Serve [Node.js](https://nodejs.org) e la CLI di Vercel, che esegue anche la funzione in `api/`:

```bash
npm install
npx vercel dev
```

Poi apri l'indirizzo che compare nel terminale (di solito http://localhost:3000).

Il deploy avviene su [Vercel](https://vercel.com): ogni push sul branch principale aggiorna il sito.

## Crediti

I dati sulla pronuncia vengono da [dizionatore.it](https://www.dizionatore.it). Questo è un progetto personale e non ufficiale, non affiliato a dizionatore.it.
