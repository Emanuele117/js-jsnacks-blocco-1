//jsnack1

// L'utente inserisce due numeri in successione, con due prompt. 

// il software stampa il maggiore.

/* STRUMENTI

- prompt

- innerHTML

*/

const userNumbOne = parseInt(prompt('inserisci un numero!'));

const userNumbTwo = parseInt(prompt('inserisci un numero!'));

const risultato = document.querySelector('.risultato');

if (userNumbOne > userNumbTwo) {
    risultato.innerHTML += userNumbOne
} else {
    risultato.innerHTML += userNumbTwo
}