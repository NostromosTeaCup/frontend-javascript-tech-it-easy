/* Opdracht 1
a. Gebruik een array-methode om een array te maken met alle tv-type namen.
b. Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
c. Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
d. Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
 */

/*a
Pseudo-code:
1. Maak een nieuwe variabele aan om de nieuwe array in op te slaan
2. Map over originele array heen
3. Return de tv-types
 */


const tvTypes = inventory.map((inventory) => {
    return inventory.type;
})


/* b
Pseude-code:
1. Maak nieuwe variabele aan om de current stock in op te slaan (originalStock)
2. haal items op die uitverkocht zijn (current)
3. export
 */

const soldOut = inventory.filter((tv) =>  {
    let currentStock = tv.originalStock - tv.sold;
    if (currentStock === 0) {
        return tv;
    }
})


/* c
Pseudo-code:
1. Maak een variabele aan om Ambilight objecten in op te slaan
2. Filter de objecten uit de inventory op options.ambilight true
3. return de items
 */

const ambiLightTv = inventory.filter((tv) => {
    if (tv.options.ambiLight === true) {
        return tv;
    }
})


/* d
Pseudo-code:
1. Maak een variabele aan om de nieuwe lijst in op te slaan
2. Voeg sort toe aan de inventory lijst, met parameters in de callback
 */

const sortbyPrice = inventory.sort((a, b) => {
    return a.price - b.price;
})

console.log("Opdracht 1a");
console.log(tvTypes);

console.log("Opdracht 1b");
console.log(soldOut);

console.log("Opdracht 1c");
console.log(ambiLightTv);

console.log("Opdracht 1d");
console.log(sortbyPrice);