/**
 * In der Datei befinden sich die Wesentliche logik
 */

/**
 * die funktion wird ausgeführt sobald die seite geladen ist, sie fügt mahlzeiten container zu der Seite zu
 */
function loadMeals() {
    for (let dataKey in data) {
        let mahlzeit = data[dataKey];
        addMealHeading(mahlzeit.id, mahlzeit.img, mahlzeit.heading);

        for (let i = 0; i < mahlzeit.meals.length; i++) {
            let meal = mahlzeit.meals[i];
            addMealField(meal.name, meal.description, meal.price, dataKey, i);
        }
    }
    console.log('Mahlzeiten wurden geladen')
}

/**
 * Die Funktion fügt produkte zum Warenkorb
 * @param key
 * @param index
 */
function addToShoppingCart(key, index) {
    let item = data[key].meals[index];
    shoppingCart.meals.push(item)
    updateLocalStorage();
    console.log('plus button wurde gedrückt')
}

/**
 * localStorag (key: ShoppingCart) wird gelöscht und neu geladen
 */
function updateLocalStorage() {
    let items = JSON.stringify(shoppingCart);
    localStorage.removeItem('shoppingCart');
    localStorage.setItem('shoppingCart', items)
    console.log('update wurde ausgeführt')
}

/**
 * Überprüft ob localStorage leer oder gefühlt ist
 */
function checkLocalStorage() {
    if (localStorage.getItem('shoppingCart') !== null) {
        console.log('localStorage ist nicht leer')
    } else {
        console.log('localStorage ist leer')
        shoppingCartIsEmpty()
    }
}
