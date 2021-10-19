// stampa il cubo dei primi N numeri

// N = numero indicato dall'utente

const askNumb = parseInt(prompt("inserisci un numero"))

for (let index = 1; index <= askNumb; index++) {
    console.log(Math.pow(index, 3))


}

