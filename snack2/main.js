// l'utente inserisce due parole in successione , con due prompt

// il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt('inserisci una parola');

const secondWord = prompt("inserisci un'altra parola");

const parola = document.querySelector(".parola")

if (firstWord.length > secondWord.length) {
    parola.innerHTML = secondWord + firstWord
} else {
    parola.innerHTML = firstWord + secondWord
}