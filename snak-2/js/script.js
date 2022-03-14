/**
 * 
A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
* 
*/

//!Funzione che inverte una stringa
function wordReverse(string){
    return string.split("").reverse().join("")
}
console.log(wordReverse("hello"));

//!Funzione che ritorna l'inverso di un numero
function reverseNumber(number){
        return -number
};
console.log(reverseNumber(12));


const list = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        "ciao", "hello", "gatto", "topo", "cane", "mammut", "casa", "macchina", "csppuccio",
        "papera"
];
//! Map ritorna una copia dell'array sul quale cicla con (in questo caso tramite operatore ternario) l'inverso delle stringhe e delle cifre 
const newList = list.map((Element) => (isNaN(parseInt(Element))) ? wordReverse(Element) : reverseNumber(Element));
console.log(newList);