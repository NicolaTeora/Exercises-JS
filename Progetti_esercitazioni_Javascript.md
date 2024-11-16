# Progetti JavaScript per Esercitarsi

Ecco una lista di idee per esercitarsi con JavaScript, suddivise in tre livelli di difficoltà.

## Livello Base

1. **Calcolatrice Base**: Una calcolatrice che permette le operazioni aritmetiche di base (sommare, sottrarre, moltiplicare, dividere). È un ottimo esercizio per manipolare il DOM.
2. **Generatore di Password**: Un’app che genera password casuali in base a criteri selezionati dall’utente, come la lunghezza e il tipo di caratteri (numeri, lettere, simboli).
3. **Cronometro/Sveglia**: Un semplice cronometro o timer con funzioni di start, stop, reset e un'opzione per impostare una sveglia.

## Livello Intermedio

4. **Quiz a Scelta Multipla**: Un’app per fare quiz a scelta multipla con punteggio e feedback a fine quiz. Puoi renderla dinamica caricando le domande da un file JSON.

5. **To-Do List con Filtri**: Un’app per gestire le cose da fare con categorie, possibilità di filtrare per stato (completato/non completato) e persistenza dei dati con LocalStorage.
6. **Galleria Immagini con Lightbox**: Un’app che visualizza un insieme di immagini in miniatura e permette di ingrandirle in una lightbox, con possibilità di navigare avanti e indietro.

## Livello Avanzato

7. **Simulatore di Spesa Mensile**: Un’app che permette di registrare entrate e uscite, calcolando un bilancio mensile. Usa grafici per visualizzare le spese e implementa LocalStorage per memorizzare i dati.

8. **App Meteo**: Un’app che mostra il meteo di una città selezionata utilizzando un'API meteo. Permetti di cercare diverse città e mostra informazioni come temperatura, umidità e condizioni climatiche.

9. **Gioco "Memory"**: Una versione digitale del gioco "Memory" in cui gli utenti devono abbinare le carte uguali. Puoi aggiungere punteggi, timer, e livelli di difficoltà crescenti.

<!-- CALCOLATRICE
Obiettivi Calcolatrice Base
1.Struttura HTML di base:

-Crea un file HTML con una sezione per visualizzare il risultato della calcolatrice.
-Aggiungi i pulsanti per le cifre (da 0 a 9), per le quattro operazioni aritmetiche (+, -, *, /), un pulsante per il segno "=" e un pulsante "C" per cancellare.

2.Stile CSS per il layout:

-Progetta un layout semplice e chiaro per la calcolatrice: i numeri e le operazioni dovrebbero essere facilmente cliccabili e leggibili.
-Puoi organizzare i pulsanti in una griglia per maggiore chiarezza.

3.Funzionalità di base con JavaScript:

-Crea le funzioni JavaScript per le operazioni base (somma, sottrazione, moltiplicazione, divisione).
-Aggiungi un "event listener" per ciascun pulsante in modo che quando l'utente clicca un numero o un'operazione, la calcolatrice mostri l'input sullo schermo.

4.Calcolo dell'espressione:

-Implementa una funzione che calcoli il risultato dell’operazione quando si preme il pulsante "=".
-Gestisci gli errori, ad esempio divisione per zero.

5.Gestione delle eccezioni e azioni di pulizia:

-Implementa il pulsante "C" per cancellare tutto e ripristinare lo schermo a 0.
-Gestisci eventuali input non validi, come cliccare più operatori consecutivamente.

6.Estensione delle funzionalità (opzionale):

-Se vuoi aggiungere difficoltà, puoi implementare anche funzionalità come percentuali o radici quadrate, o un pulsante per cambiare segno da positivo a negativo.
-->

<!-- GEN. PASSWORD
Ecco una lista di obiettivi da seguire per creare un Generatore di password completo e personalizzabile:

1. Struttura Base:
    - Crea un semplice layout HTML con un campo di testo per visualizzare la password generata, un bottone per generare la password, e checkbox o selettori per personalizzare i criteri.

2. Lunghezza della Password:
    - Aggiungi un input (es. range slider o numero) per scegliere la lunghezza della password. La lunghezza potrebbe variare, ad esempio, tra 8 e 20 caratteri.

3. Caratteri da Includere:
    - Offri opzioni per includere vari tipi di caratteri:
        - Lettere minuscole
        - Lettere maiuscole
        - Numeri
        - Simboli (come !@#$%^&*() )

4. Generazione Casuale:
    - Scrivi una funzione JavaScript che crea una password casuale basandosi sulle opzioni selezionate. Potresti creare gruppi di caratteri per ogni tipo e selezionarli casualmente.

----(diff. Intermedia)----

5. Validazione delle Opzioni:
    - Assicurati che almeno un tipo di carattere sia selezionato. Se l’utente non seleziona nulla, puoi mostrare un messaggio di errore.

6. Funzionalità di Copia:
    - Aggiungi un pulsante per copiare la password negli appunti, così l’utente può incollarla altrove. JavaScript ha una funzione "navigator.clipboard.writeText()"" utile per questo scopo.

7. Stile e UX:
    - Applica stili CSS per migliorare l'aspetto e la facilità d'uso, ad esempio cambiando il colore di sfondo del campo password per indicare che è stata copiata.

8. Extra Opzionali:
    - Opzioni per generare password “memorizzabili” (ad es., alternando consonanti e vocali).
    - Misuratore di forza della password che cambia dinamicamente in base ai criteri selezionati.

Ognuno di questi obiettivi ti darà una buona pratica sia su JavaScript che sull’interazione con il DOM!
 -->

<!-- CRONOMETRO/SVEGLIA
Ecco un piano con gli obiettivi principali per sviluppare un cronometro/sveglia in JavaScript:

1. Impostare l'interfaccia di base
- Crea un layout semplice in HTML con un display per mostrare il tempo trascorso.
- Aggiungi i pulsanti per avviare, mettere in pausa, resettare e, se stai facendo anche una sveglia, impostare un allarme.
- Stabilisci uno stile minimale con CSS per organizzare bene i pulsanti e il display.

2. Logica del cronometro
- Definisci variabili per tenere traccia del tempo (secondi, minuti, ore) e aggiornale costantemente quando il cronometro è in funzione.
- Usa "setInterval" per aggiornare il tempo visualizzato ogni secondo.
- Programma le funzioni per i pulsanti:
    - Start: avvia il conteggio del tempo.
    - Pause: ferma temporaneamente il conteggio.
    - Reset: riporta il tempo a zero.

3. Aggiungere la sveglia
- Crea un’interfaccia che permetta all’utente di impostare l’orario della sveglia.
- Controlla continuamente l’ora attuale rispetto all’ora della sveglia e attiva un allarme quando coincidono (puoi usare "setInterval" o "setTimeout" per farlo).
- Inserisci una notifica audio o visiva per segnalare l’allarme, e un pulsante per interromperlo.

4. Migliorare la precisione e la visualizzazione
- Formatta il display per mostrare il tempo in modo chiaro (ad esempio, con due cifre per minuti e secondi: 00:00:00).
- Assicurati che il cronometro resti accurato anche dopo essere stato messo in pausa o riavviato.

5. Test e perfezionamento
- Verifica che ogni funzione lavori come previsto e che i pulsanti siano reattivi.
- Considera eventuali ottimizzazioni, come usare "requestAnimationFrame" al posto di "setInterval" per il cronometro se necessiti di maggiore fluidità.

Prossimi passi (opzionale)
Se tutto funziona come desideri, puoi pensare ad altre funzionalità, come:
- Mostrare un'icona accanto al cronometro quando una sveglia è attiva.
- Permettere di impostare più sveglie.
- Disattivare il pulsante di reset se non c'è una sveglia impostata.
 -->
