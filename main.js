/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
*/

'use strict'

// Variabili input
const fullName = document.getElementById('full-name');
const kmTrip = document.getElementById('km-trip');
const ageRange = document.getElementById('age-range');

// Variabili button
const createTicket = document.getElementById('create-ticket');

//Calcolo del biglietto
createTicket.addEventListener('click', function () {
    let ticketPrice = 0.21 * kmTrip.value
    console.log('prezzo intero =', ticketPrice)

    if (ageRange.value === 'minorenne') {
        ticketPrice = (ticketPrice - (ticketPrice / 100 * 20))
        console.log('prezzo scontato del 20% =', ticketPrice)

    } else if (ageRange.value === 'over65') {
        ticketPrice = (ticketPrice - (ticketPrice / 100 * 40))
        console.log('prezzo scontato del 40% =', ticketPrice)

    } else {
        console.log('sono over 65')
    }
});
