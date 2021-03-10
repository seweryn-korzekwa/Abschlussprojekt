/**
 * In der Datei befinden sich die Funktionen für die Programm Logik
 * Onload - Funktionen die ausgeführt werden sobald die Seite geladen ist
 * Event - Funktion die auf ein Mausklick reagieren
 */

const btnOrder = document.getElementById('orderButton'); /* der Bestell Button */
const minPrice = 25; /* Mindestbestellwert */
const deliveryCosts = 7; /* Lieferkosten */

/**
 * Onload - Die Funktion wird ausgeführt sobald die Seite geladen ist
 * Die Funktion Implementiert die Navigations und Speisekarte inhalte in die index.html Datei
 * Funktion wird ausgeführt sobald die Seite geladen hat.
 */
function addElementsToHTML() {

    for (let dataKey in data) {
        let product = data[dataKey];
        addLinksToNavbar(product.id, product.heading);
        addProductHeader(product.id, product.img, product.heading);

        for (let i = 0; i < product.meals.length; i++) {
            let meal = product.meals[i];
            addMealField(meal.name, meal.description, meal.price, dataKey, i);
        }
    }
}

/**
 * Onload - Die Funktion wird ausgefürt sobald die Seite geladen ist
 * Überprüft ob es daten aus dem localStorage zum laden gibt
 */
function checkLocalStorage() {
    const shoppingCart = localStorage.getItem('shoppingCart');
    const meals = JSON.parse(localStorage.getItem('shoppingCart')).meals.length;

    if (!!shoppingCart && meals > 0) {
        document.getElementById('shoppingCartIsEmpty').style.display = 'none' /*fixme: kürzer machen*/
        pushToHTML();
        shoppingCartUpdate();
        priceUpdate(deliveryCosts);
    } else {
        shoppingCartIsEmpty();
    }
}

/**
 * Event - Die Funktion wird ausgefürt sobald der Benutzer ein Produkt zum Warenkorb zufügt
 * Button wurde geklickt
 * @param key
 * @param index
 */
function clickButton(key, index) {
    pushProductToShoppingCart(key, index) /* Produkte werden zum Array in JSON gepusht in data.js */
    updateLocalStorage(); /* Produkte aus dem Array werden in localStorage gespeichert */
    shoppingCartClear() /* HTML inhalt wird aus dem Warenkorb gelöscht */
    checkLocalStorage() /* localStorage wird zum HTML inhalt gepusht */
    priceUpdate(deliveryCosts)
}

/**
 * Event - Die Funktion wird ausgeführt sobald der Benutzer ein Produkt aus dem Warenkorb löscht
 * Löscht daten aus dem Warenkorb Array
 * @param {int} index
 */
function deleteItem(index) {
    itemSplice(index)
    updateLocalStorage()
    shoppingCartClear()
    checkLocalStorage()
}

/**
 * Event - Die Funktion wird ausgeführt sobald der Benutzer auf denBetsell Button gedrückt hat
 * Funktion informiert den Benutzer über die erfolgreiche Bestellung
 */
function btnAction() {
    window.alert('Deine Bestellung wurde Aufgenommen')
}

/**
 * Produkt wurde zum shoppingCart.meals in data.js zugefügt
 * @param key
 * @param index
 */
function pushProductToShoppingCart(key, index) {
    let product = data[key].meals[index];
    shoppingCart.meals.push(product)
}

/**
 * localStorage ladet die daten aus shoppingCartArray nochmal neu
 */
function updateLocalStorage() {
    localStorage.removeItem('shoppingCart');
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

/**
 * Löscht den HTML inhalt aus Warenkorb
 */
function shoppingCartClear() {
    shoppingCartProductContainer.innerHTML = '';
}

/**
 * produkt wird aus dem shoppingCart.meals {Array} in data.js gelöscht an stelle index
 * @param  index {int}
 */
function itemSplice(index) {
    shoppingCart.meals.splice(index, 1);
}

/**
 * Updatet ShoppingCart in data.js
 */
 function shoppingCartUpdate() {
     shoppingCart.meals = JSON.parse(localStorage.getItem('shoppingCart')).meals;
 }

/**
 *
 * @param {int} deliveryCosts - Lieferkosten
 */
function priceUpdate(deliveryCosts) {
     const data = JSON.parse(localStorage.getItem('shoppingCart')).meals;
     let price = 0;

     for (const dataKey in data) {
         price += parseFloat(data[dataKey].price);
     }

     let gesamtkosten = price + deliveryCosts

     checkButton(gesamtkosten, minPrice)
     changePrice(price, deliveryCosts, gesamtkosten)
 }


/**
 * Die Funktion überprüft ob die Mindestbestellgrenze erreicht wurde
 * @example ja - der Button wird aktiviert
 * @example nein - der Button wird deaktiviert
 * @param {int} gesamtkosten - Gesamtkosten = preis + Lieferkosten
 * @param {int} min - Mindestbestellwert
 */
function checkButton(gesamtkosten, min) {
     if(gesamtkosten < min) {
         btnOrder.setAttribute('disabled', true)
     } else {
         btnOrder.removeAttribute('disabled')
     }
 }

/**
 * Die Funktion ladet die daten aus dem localStorage und ruft eine funktion auf die die Daten in Warenkorb anzeigt
 */
function pushToHTML() {
    const data = JSON.parse(localStorage.getItem('shoppingCart')).meals

    for (const dataKey in data) {
        pushProduct(data, dataKey);
    }
}
