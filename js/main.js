/**
 * In der Datei befinden sich die Wesentliche logik
 */

/**
 * onload in body - function wird ausgeführt sobald die Seite geladen ist
 * Funktion fügt daten aus data-JSON in container zu der Seite zu
 */
function loadMealsToHTML() {
    for (let dataKey in data) {
        let mahlzeit = data[dataKey];
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
    if (JSON.parse(localStorage.getItem('shoppingCart')).meals.length > 0) {
        cache()
    }
    else {
        shoppingCartIsEmpty()
    }
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
}

/**
 * Step 2: Produkt wurde zum shoppingCartArray.meals in data.js zugefügt
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
 * Lösch daten aus dem Warenkorb Array
 * @param index {int}
 */
function deleteItem(index) {
    itemSplice(index)
    updateLocalStorage()
    shoppingCartClear()
    checkLocalStorage()
}

/**
 * Item wird aus dem Array gelöscht an stelle index
 * @param  index {int}
 */
function itemSplice(index) {
    shoppingCart.meals.splice(index, 1);
}


/**
 * Was mach die Funktion?
 */
function cache() {
    /* dient als Zwischenspeicher für localStorage */
    let meals = JSON.parse(localStorage.getItem('shoppingCart')).meals;

    /* Ladet daten aus den oberen variabel ins Warenkorb in HTML */
    loadLocalStorageToCache(meals)

    /* daten in shoppingCart werden durch daten aus localStorage ersetzt  */
    shoppingCartUpdate(meals)
}

/**
 * Funktion ladet daten aus den Temp var in den Warenkorb HTML
 * @param meals {JSON}
 */
function loadLocalStorageToCache(meals,) {
    for (const mealsKey in meals) {
        /**
         * Parameter werden dem HTML template übergeben
         * @param meals[mealsKey].name {string}
         * @param meals[mealsKey].price {string}
         * @param meals[mealsKey].description {string}
         * @param mealsKey {int} - index notwendig für die Funktion itemSplice
         */
        pushToHTML(meals[mealsKey].name, meals[mealsKey].price, meals[mealsKey].description, mealsKey)
    }
}

/**
 * Updatet ShoppingCartArray in data.js
 * @param meals
 */
 function shoppingCartUpdate(meals) {
     shoppingCart.meals = meals;
 }


