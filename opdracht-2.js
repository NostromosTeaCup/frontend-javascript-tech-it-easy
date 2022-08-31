
/*Opdracht 2
a. Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
b. Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
c. Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
d. Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
e. Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
 */

/* a
Pseude-code:
1. Maak een nieuwe variabele aan om de verkochte tv's in op te slaan
2. Haal de verkochte tv's op (sold)
3. bereken de sum van de array en plaats deze in een variabele
4. return het aantal verkochte tv's
 */

const totalSumOfSoldTvs = () => {
    let totalSoldTvs = null;
    inventory.map((tv) => {
        totalSoldTvs += tv.sold;
    })
    return totalSoldTvs;
}

/* b
Pseude-code:
1. maak het aantal groen op de pagina
 */

const createSoldTvs = () => {
    const soldTvs = document.getElementById("sold-tvs");
    soldTvs.innerText = `${totalSumOfSoldTvs()} tv's are sold`
    soldTvs.style.color = "#558564";
};

/* c */

const totalSumOfPurchasedTvs = () => {
    let totalTv = null;
    inventory.map ((tv) => {
        totalTv += tv.originalStock;
    })
    return totalTv;
}

/* d */

const createPurchasedTvs = () => {
    const purchasedTVs = document.getElementById("tvs-purchased");
    purchasedTVs.innerText = `${totalSumOfPurchasedTvs()} tv's are purchased`;
    purchasedTVs.style.color = "#3095E7";
}

/* e */

const createAmountOfStock = () => {
    let totalAmountOfStock = totalSumOfPurchasedTvs() - totalSumOfSoldTvs();
    let currentStock = document.getElementById("tvs-in-stock");
    currentStock.innerText = `${totalAmountOfStock} tv's are still in stock`;
    currentStock.style.color = "red";
}

console.log("Opdracht 2a");
console.log(totalSumOfSoldTvs());

console.log("Opdracht 2b");
console.log("Antwoord in html");
createSoldTvs();

console.log("Opdracht 2c");
console.log(totalSumOfPurchasedTvs());

console.log("Opdracht 2d");
console.log("Antwoord in html");
createPurchasedTvs();

console.log("Opdracht 2e");
console.log("Antwoord in html");
createAmountOfStock();