/*
a- Chiedere all'utente quanti km vuole percorrere
b- Chiedere l'età all'utente
c- calcolare il prezzo in base ai km da percorrere e allo sconto previsto dall'età dell'utente.
d- stampare in pagina il prezzo del biglietto (con un massimo di 2 decimali)

Flusso di lavoro:
1. inizializzare le variabili
2. far inserire i dati
3. calcolare il totale del biglietto
4. calcolare lo sconto (se previsto) in base all'età
5.stampare il prezzo del biglietto
*/


// 1.

const journeyKm = 30;  //prompt
const userAge = 68; //prompt
const costForKm = 0.21;
const fullPriceTiket = journeyKm * costForKm;
let finalCostTiket

console.log('costo del tiket intero è' + " " + fullPriceTiket);

if(userAge < 18) {
  finalCostTiket = fullPriceTiket - (fullPriceTiket / 100 *20);
  console.log('costo da minorenne');

} else if(userAge >= 65) {
  finalCostTiket = fullPriceTiket - (fullPriceTiket / 100 *40);
  console.log('costo da anziano');

} else {
  finalCostTiket = fullPriceTiket;
  console.log('costo intero');
}

console.log(finalCostTiket);




