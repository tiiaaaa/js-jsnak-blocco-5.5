/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */

const zucchine = [
    {
        "varietà": "nera",
        peso: 10,
        lunghezza: 16,
    },

    {
        "varietà": "bianca",
        peso: 5,
        lunghezza: 8,
    },

    {
        "varietà": "verde",
        peso: 20,
        lunghezza: 13,
    },

    {
        "varietà": "blu",
        peso: 13,
        lunghezza: 7,
    },

    {
        "varietà": "gialla",
        peso: 6,
        lunghezza: 17,
    },

    {
        "varietà": "viola",
        peso: 15,
        lunghezza: 8,
    },

    {
        "varietà": "azzurra",
        peso: 12,
        lunghezza: 14,
    },

    {
        "varietà": "nera",
        peso: 6,
        lunghezza: 5,
    },

    {
        "varietà": "rossa",
        peso: 9,
        lunghezza: 18,
    },

    {
        "varietà": "nera",
        peso: 12,
        lunghezza: 20,
    },
];

//!Filter se ritorna vero crea un array con quegli elementi, altrimenti li scarta
const arrayLunghe = zucchine.filter((Element) => Element.lunghezza > 15);
console.log(arrayLunghe);

const arrayCorte = zucchine.filter((Element) => Element.lunghezza < 15);
console.log(arrayCorte);

//!Utilizzati vari foreach per trovare il peso tot dei vari insiemi
let totalWeight = 0

zucchine.forEach((Element) => {
    totalWeight += Element.peso;
});

let weightLunghe = 0
arrayLunghe.forEach((Element) => {
    weightLunghe += Element.peso
});
console.log(weightLunghe);

let weightCorte = 0
arrayCorte.forEach((Element) => {
    weightCorte += Element.peso
});
console.log(weightCorte);
