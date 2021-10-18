// crea un array vuoto

// chiedi per 6 volte all'utente di inserire un numero

// se è dispari inseriscilo nell'arrey.


/* STRUMENTI

- array

- ciclo for

- add 

*/

const numeroDispari = [""];

for (let index = 0; index < 6; index++) {
    const element = parseInt(prompt("Inserisci un numero"));

    if (element % 2 != 0) {
        numeroDispari.push(element)
    }
    console.log(numeroDispari);

}
