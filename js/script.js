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
const randomNumbers = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const userNumbers = document.querySelectorAll('.form-control');
const button = document.querySelector('.btn');
const message = document.getElementById('message');

// Imposto il countdown
let time = 30

const clock = setInterval(() => {
    // Se il tempo arriva a 0 fermo il countdown e nascondo il div di partenza
    if (time === 0) {
        clearInterval(clock);
    } else {
    countdown.innerText = time
    time = time - 1;
    }
}, 1000);

// Lo fermo quando arriva a 0


// Genero i numeri randomici

// Alla fine del countdown nascondo countdown e numeri e faccio comparire le caselle di input

// Confronto l'array dei numeri randomici con l'array dei numeri inseriti dall'utente