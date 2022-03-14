/**
*  Dato un array, genera randomicamente due numeri:
*   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
*   il secondo numero che dovrà essere sempre minore del primo numero
*
* Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
* La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
*/

const array = [1, 2, 3, 4, 5, 6, 7];

function randomNumber(number){
    number = Math.floor(Math.random()) < array.length
}