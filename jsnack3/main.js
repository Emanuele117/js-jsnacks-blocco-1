// il software deve chiedere per 10 volte all'utente di inserire un numero.

// il programma stampa la somma di tutti i numeri inseriti.

let sommaNumeri = document.querySelector('.numbers')

let somma = 0;

for (let index = 0; index < 10; index++) {
    const element = parseInt(prompt('inserisci un numero'));

    somma += element



    console.log(somma);


}

sommaNumeri.innerHTML = somma