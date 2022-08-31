/*
Opdracht 4
a. Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
b. Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
c. Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
d. Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
 */

// a

function tvFormat(selectedTv) {
    return `${selectedTv}.brand} ${selectedTv.type} - ${selectedTv.name}`;
}

// b

function tvPricesFormat(selectedTv) {
    return `€${selectedTv.price},-`;
}


/* c
Pseudocode:
stap 1 maak een functie aan voor screenSizesFormat
stap 2 voeg een parameter toe de geselecteerde tv
stap 3 geef een string return met if statement voor 4 schermgrootte
stap 4 geef een string return met if statement voor 1 schermgrootte
 */

function screenSizesFormat(selectedTv) {
    let onePriceFormat = `${selectedTv.availableSizes[0]} inches (${selectedTv.availableSizes[0] * 2.54} cm) `
    let fourPricesFormat = `${selectedTv.availableSizes[0]} inches (${selectedTv.availableSizes[0] * 2.54} cm) | ${selectedTv.availableSizes[1]} inches (${selectedTv.availableSizes[1] * 2.54} cm) | ${selectedTv.availableSizes[2]} inches (${selectedTv.availableSizes[2] * 2.54} cm) | ${selectedTv.availableSizes[3]} inches (${selectedTv.availableSizes[3] * 2.54} cm) `;
    if (selectedTv.availableSizes.length === 1) {
        return onePriceFormat
    } if (selectedTv.availableSizes.length === 4) {
        return fourPricesFormat;
    }
}

/* d
Pseudecode:
stap 1 variabele aanmaken met anonieme functie, met parameter voor de te selecteren tv
stap 2 het juiste id element selecteren en in een variabele plaatsen
stap 3 export combi maken van functies tvFormat, tvPricesFormat en screenSizesFormat op tabel
 */

const fullInfoOfTv = (selectedTv) => {
    let createFullInfoOfTv = document.getElementById("full-data-of-tv");
    createFullInfoOfTv.innerHTML = `
    <tr>
        <th>${tvFormat(selectedTv)}</th>
    </tr>
    <tr>
        <td>${tvPricesFormat(selectedTv)}</td>
    </tr>
    <tr>
        <td>${screenSizesFormat(selectedTv)}</td>
    </tr>
    `
};

console.log("Opdracht 4a:");
console.log(tvFormat(inventory[1]));

console.log("Opdracht 4b:");
console.log(tvPricesFormat(inventory[1]));

console.log("Opdracht 4c:");
console.log(screenSizesFormat(inventory[3]));

console.log("Opdracht 4d:");
console.log("Antwoord in html");
fullInfoOfTv(inventory[4]);