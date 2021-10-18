// stampa il cubo dei primi N numeri

// N = numero indicato dall'utente

const askNumb = parseInt(prompt("inserisci un numero"))

const risultato = document.querySelector(".risultato")

risultato.innerHTML += Math.pow(askNumb, 3)