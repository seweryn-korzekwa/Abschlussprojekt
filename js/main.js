/**
 * In der Datei befinden sich die Wesentliche logik
 */

const btn = document.getElementById('orderButton');

/**
 * onload in body - function wird ausgeführt sobald die Seite geladen ist
 * Funktion fügt daten aus data-JSON in container zu der Seite zu
 */
function loadMealsToHTML() {
    for (let dataKey in data) {
        let mahlzeit = data[dataKey];
        addLinksToNavbar(mahlzeit.id, mahlzeit.heading);
        addMealHeading(mahlzeit.id, mahlzeit.img, mahlzeit.heading);

        for (let i = 0; i < mahlzeit.meals.length; i++) {
            let meal = mahlzeit.meals[i];
            addMealField(meal.name, meal.description, meal.price, dataKey, i);
        }
    }
}

/**
* Überprüft ob es daten aus dem localStorage zum laden gibt
*/
function checkLocalStorage() {
    const shoppingCart = localStorage.getItem('shoppingCart');
    const mealsArrayLength = JSON.parse(localStorage.getItem('shoppingCart')).meals.length;
    if (!!shoppingCart && mealsArrayLength > 0) {
        document.getElementById('shoppingCartIsEmpty').style.display = 'none'
        pushToHTML();
        shoppingCartUpdate();
        priceUpdate();
    }
    else {
        shoppingCartIsEmpty();
    }
}

/**
 * Lösch daten aus dem Warenkorb Array
 * @param {int} index
 */
function deleteItem(index) {
    itemSplice(index)
    updateLocalStorage()
    shoppingCartClear()
    checkLocalStorage()
}

/**
 * Step 1: Button wurder geglickt
 * @param key
 * @param index
 */
function clickButton(key, index) {
    pushProductToShoppingCart(key, index) /* Step 2: Produkte werden zum Array in JSON gepusht in data.js */
    updateLocalStorage(); /* Step 3: Produkte aus dem Array werden in localStorage gespeichert */
    shoppingCartClear() /* Step 4: HTML inhalt wird aus dem Warenkorb gelöscht */
    checkLocalStorage() /* Step 5: localStorage wird zum HTML inhalt gepusht */
    priceUpdate()
}

/**
 * Step 2: Produkt wurde zum shoppingCart.meals in data.js zugefügt
 * @param key
 * @param index
 */
function pushProductToShoppingCart(key, index) {
    let product = data[key].meals[index];
    shoppingCart.meals.push(product)
}

/**
 * Step 3: localStorage ladet die daten aus shoppingCartArray nochmal neu
 */
function updateLocalStorage() {
    localStorage.removeItem('shoppingCart');
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

/**
 * Step 4: Löscht den HTML inhalt aus Warenkorb
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
 * Updatet ShoppingCartArray in data.js
 * @param meals
 */
 function shoppingCartUpdate() {
     shoppingCart.meals = JSON.parse(localStorage.getItem('shoppingCart')).meals;
 }

 function priceUpdate() {
     const data = JSON.parse(localStorage.getItem('shoppingCart')).meals;
     let price = 0;
     const deliveryCosts = 7;

     for (const dataKey in data) {
         price += parseFloat(data[dataKey].price);
     }

     let gesamtkosten = price + deliveryCosts

     if(gesamtkosten < 45) {
         btn.setAttribute('disabled', true)
     } else {
         btn.removeAttribute('disabled')
     }

     test3(price, deliveryCosts, gesamtkosten)

 }

 function closeShoppingCart() {
     document.getElementById('scc').style.display = 'none';
 }

 function openShoppingCart() {
     document.getElementById('scc').style.display = 'block';
 }

/**
 * Zweck der Funktion ist die HTML Elemente in Warenkorb anzuzeigen
 */
function pushToHTML() {
    const data = JSON.parse(localStorage.getItem('shoppingCart')).meals
    for (const dataKey in data) {
        shoppingCartProductContainer.innerHTML += `
            <div class="shopping_cart_item">
                <div class="space-between y-center">
                    <span class="shopping_cart_item_name">${data[dataKey].name}</span>
                    <div class="y-center">
                        <span class="shopping_cart_item_price">${data[dataKey].price.toFixed(2)} &euro;</span>
                        <div class="delete-img" onclick="deleteItem('${dataKey}')"></div>
                    </div>
                </div>
                <div>
                    <span class="shopping_cart_item_description">${data[dataKey].description}</span>
                </div>
            </div>
        `
    }
}

function test4() {

}
