/**
 * In der Datei befinden sich die Funktionen für die Programm Logik
 * Onload - Funktionen die ausgeführt werden, sobald die Seite geladen ist
 * Event - Funktion die auf ein Mausklick reagieren
 */

const btnOrder = document.getElementById('orderButton'); /* der Bestell Button */
const minPrice = 25; /* Mindestbestellwert */
const deliveryCosts = 7; /* Lieferkosten */

/**
 * Onload - Die Funktion wird ausgeführt, sobald die Seite geladen ist
 * Die Funktion implementiert die Navigations- und Speisekarte Inhalte in die index.html Datei
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
 * Onload - Die Funktion wird ausgeführt, sobald die Seite geladen ist
 * Überprüft ob es Daten aus dem localStorage zum laden gibt
 */
function checkLocalStorage() {
    const shoppingCart = localStorage.getItem('shoppingCart');
    const meals = JSON.parse(localStorage.getItem('shoppingCart')).meals;

    if (!!shoppingCart && meals.length > 0) {
        document.getElementById('shoppingCartIsEmpty').style.display = 'none';
        pushToHTML();
        shoppingCartUpdate();
        priceUpdate(deliveryCosts);
    } else {
        shoppingCartIsEmpty(minPrice);
    }
}

/**
 * Event - Die Funktion wird ausgeführt, sobald der Benutzer ein Produkt zum Warenkorb hinzufügt
 * Button wurde geklickt
 * @param {String} key - Bezeichner
 * @param {int} index - Die stelle im Array
 */
function clickButton(key, index) {
    pushProductToShoppingCart(key, index) /* Produkte werden zum Array in JSON gepusht in data.js */
    updateLocalStorage(); /* Produkte aus dem Array werden in localStorage gespeichert */
    shoppingCartClear() /* HTML inhalt wird aus dem Warenkorb gelöscht */
    checkLocalStorage() /* localStorage wird zum HTML inhalt gepusht */
}

/**
 * Event - Die Funktion wird ausgeführt, sobald der Benutzer ein Produkt aus dem Warenkorb entfernt
 * Entfernt Daten aus dem Warenkorb Array
 * @param {int} index - Die stelle im Array
 */
function deleteItem(index) {
    shoppingCartClear();
    itemSplice(index);
    updateLocalStorage();
    checkLocalStorage();
}

/**
 * Event - Die Funktion wird ausgeführt, sobald der Benutzer auf den bestell Button gedrückt hat
 * Funktion informiert den Benutzer über die erfolgreiche Bestellung
 */
function btnAction() {
    window.alert('Deine Bestellung wurde Aufgenommen')
}

/**
 * Produkt wurde zum shoppingCart.meals in data.js zugefügt
 * @param {String} key - Bezeichner
 * @param {int} index - Die stelle im Array
 */
function pushProductToShoppingCart(key, index) {
    let product = data[key].meals[index];
    shoppingCart.meals.push(product)
}

/**
 * localStorage ladet die Daten aus shoppingCartArray nochmal neu
 */
function updateLocalStorage() {
    localStorage.removeItem('shoppingCart');
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

/**
 * Entfernt den HTML Inhalt aus Warenkorb
 */
function shoppingCartClear() {
    shoppingCartProductContainer.innerHTML = '';
}

/**
 * Produkt wird aus dem shoppingCart.meals {Array} in data.js gelöscht an Stelle index
 * @param  {int} index - Die stelle im Array
 */
function itemSplice(index) {
    shoppingCart.meals.splice(index, 1);
}

/**
 * Die Funktion wird nur dann ausgeführt, wenn die Seite neu geladen wurde und der localStorage nicht leer ist
 */
 function shoppingCartUpdate() {
     if (shoppingCart.meals.length === 0) {
         shoppingCart.meals = JSON.parse(localStorage.getItem('shoppingCart')).meals;
     }
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

     let totalPrice = price + deliveryCosts

     checkButton(totalPrice, minPrice)
     changePrice(price, deliveryCosts, totalPrice)
 }


/**
 * Die Funktion überprüft ob die Mindestbestellgrenze erreicht wurde
 * @example ja - der Button wird aktiviert
 * @example nein - der Button wird deaktiviert
 * @param {int} totalPrice - Gesamtkosten = Preis + Lieferkosten
 * @param {int} min - Mindestbestellwert
 */
function checkButton(totalPrice, min) {
     if(totalPrice < min) {
         btnOrder.setAttribute('disabled', true)
         updateButtonDisable(totalPrice, min)
     } else {
         btnOrder.removeAttribute('disabled')
         updateButtonAktive(totalPrice)
     }
 }

/**
 * Die Funktion ladet die Daten aus dem localStorage und ruft eine Funktion auf, die die Daten in Warenkorb anzeigt
 */
function pushToHTML() {
    const data = JSON.parse(localStorage.getItem('shoppingCart')).meals

    for (const dataKey in data) {
        pushProduct(data, dataKey);
    }
}

