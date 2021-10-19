// chiedi un numero di 4 cifre all'utente

// calcola la somma di tutte le cifee che compongono il numero.

/* STRUMENTI

- prompt

- for

- sum

*/

let sum = 0;

const four_digit_number = prompt('inserisci un numero di 4 cifre')

for (let i = 0; i < four_digit_number.length; i++) {
    const numb = Number(four_digit_number[i])

    sum += numb

}

console.log(numb);