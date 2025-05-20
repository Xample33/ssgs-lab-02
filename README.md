# Labo-String: CLI per Utilità su Stringhe

## Funzionalità Principali

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione, avvio e testing

1. Clonare il repository  
   ```
   git clone https://github.com/crispadaro74/ssgs-labo-02.git
   ```

2. Entrare nella cartella del progetto  
   ```
   cd ssgs-labo-02
   ```

3. Installare le dipendenze  
   ```
   npm ci
   ```

4. Eseguire il codice da terminale  
   ```
   npm start <numero_funzione> <stringa_input> [parametro_aggiuntivo]
   ```

4. Eseguire i test (opzionale)   
   ```
   npm run test
   ```
---

## Ambiente di Sviluppo

- **Node.js** v22.x  
- **npm** v10.x  

---

## Testing & Coverage

I test sono scritti con **Jest** e si trovano nella cartella `test/`:

- `stringUtils.test.js` – Test raggruppati in base alle funzioni che vengono utilizzate

La **code coverage** è attiva tramite Jest (`--coverage`) ed è visibile scaricando l'artifact generato dalle actions

---


## CI con GitHub Actions

Ogni push o pull request scatena questo processo:

- L'installazione delle dipendenze
- L'esecuzione dei test con Jest
- Il caricamento della code coverage come artifact

Il file della pipeline si trova in:

```
.github/workflows/code-coverage.yml
```

---


## Struttura del Progetto

```
ssgs-lab-02/
│
├── src/
│   └── stringUtils.js              # Modulo con le funzioni matematiche
│
├── test/
│   └── stringUtils.test.js         # File usato da jest per i test
│
├── .github/
│   └── workflows/   
│       └── code-coverage.yml       # File per il workflow di CI che esegue i test e carica il risultato come artifact
│
├── .gitignore                      # File per escludere directory/file dal versionamento
├── index.js                        # Entry point CLI
├── package.json                    # Configurazione del progetto e degli script npm
├── package.json                    # File di lock delle dipendenze
└── README.md                       # Documentazione del progetto
```