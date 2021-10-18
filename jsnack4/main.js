// in un array sono contenuti i nomi degli invitati alla festa 

// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa

/* STRUMENTI

- prompt

- array 

- ciclo for

- innerHTML


*/

const askName = prompt('Inserisci il tuo nome')

const invitati = ["paolo", "giovanni", "sara", "emanuele", "federica"]

let trovato = false

for (let i = 0; i < invitati.length; i++) {

    if (askName == invitati[i]) {
        trovato = true
    }

}

let risultato = document.querySelector('.risultato')

if (trovato == true) {
    risultato.innerHTML = "Benvenuto, Puoi partecipare alla festa!"
} else {
    risultato.innerHTML = "Mi dispiace, non puoi partecipare alla festa.."
}