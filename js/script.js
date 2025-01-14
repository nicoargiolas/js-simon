// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA:
// non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.
// BONUS:
// Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

// Prendo gli elementi che mi servono dall'html
const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const randomNumbers = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const userNumbers = document.querySelectorAll('.form-control');
const button = document.querySelector('.btn');
const message = document.getElementById('message');

// Dichiarazione variabili globali
let time = 3;
let difficolta = 5; // Questo è il numero di numeri da ricordare in modo che se cambi non bisogna modificiarlo ovunque
const arrayRandomN = [];
const arrayUserN = [];
const arrayGuessedN = [];

// Imposto il countdown

const clock = setInterval(() => {
    // Se il tempo arriva a 0 fermo il countdown e nascondo il div di partenza
    if (time === 0) {
        clearInterval(clock);
        countdown.classList.add("d-none");
        randomNumbers.classList.add("d-none");
        form.classList.remove("d-none");
        instructions.innerText = 'Scrivi i numeri'
    } else {
    countdown.innerText = time
    time = time - 1;
    }
}, 1000);


// Genero i numeri randomici

// Funzione numeri randomici
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Ciclo per aggiungere i numeri randomici con controllo che non ce ne siano uguali
for (let i = 0; arrayRandomN.length < difficolta; i++) {
    let n = getRandomArbitrary(1,50);

    if (arrayRandomN.includes(n)) {} else {
        arrayRandomN.push(parseInt(n));
    }
}

// Stampo in pagina gli elementi dell'array
for (let i = 0; i < arrayRandomN.length; i++) {
    randomNumbers.innerHTML += `<li> ${arrayRandomN[i]} </li>`;
}


// Confronto l'array dei numeri randomici con l'array dei numeri inseriti dall'utente

// Prendo i numeri inseriti dall'utente al click del bottone
button.addEventListener('click', (event) => {
    event.preventDefault();
    // Ciclo che aggiunge i numeri inseriti dall'utente nell'array
    for (i = 0; arrayUserN.length < difficolta; i++) {
        if (arrayUserN.includes(userNumbers[i].value)) {
            alert("Hai inserito dei numeri uguali");
            break;
        } else {
            arrayUserN.push(parseInt(userNumbers[i].value));
        }
    }

    let resultCounter = 0;
    for (i = 0; i < difficolta; i++) {
        if (arrayUserN.includes(arrayRandomN[i])) {
            arrayGuessedN.push(arrayRandomN[i]);
            resultCounter += 1;
        }
    }

    // Messaggio di output
    message.innerText = `Hai indovinato ${resultCounter} numeri (${arrayGuessedN.toString()})`;
})