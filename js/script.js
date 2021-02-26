
/* ------------------------------------------------------------------------------------------------------------------ */
/* --- JSON --------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------ */

const data = {
    pizza: {
        id: "pizza",
        img: 'img/pizza-bg.jpg',
        heading: 'Pizza',
        meals: [
            {
                name: 'Pizza Diablo',
                description: 'In der zukunft kommt hier ein Beschreibung Text',
                price: 11.50
            },
            {
                name: 'Pizza Diablo',
                description: 'In der zukunft kommt hier ein Beschreibung Text',
                price: 11.50
            }
        ]
    },
    salad: {
        id: "salad",
        img: 'img/pizza-bg.jpg',
        heading: 'Salate',
        meals: [
            {
                name: 'Pizza Diablo',
                description: 'In der zukunft kommt hier ein Beschreibung Text',
                price: 11.50
            },
            {
                name: 'Pizza Diablo',
                description: 'In der zukunft kommt hier ein Beschreibung Text',
                price: 11.50
            }
        ]
    }
}

let shoppingCartArray = {
    meals: []
};

checkLocalStorage();

/* ------------------------------------------------------------------------------------------------------------------ */
/* --- FUNKTIONEN --------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------ */

/* die funktion wird ausgeführt sobald die seite geladen ist, sie fügt mahlzeiten container zu der Seite zu */
function loadMeals() {
    for (const dataKey in data) {
        const mahlzeit = data[dataKey];
        addMealHeading(mahlzeit.id, mahlzeit.img, mahlzeit.heading);

        for (let i = 0; i < mahlzeit.meals.length; i++) {
            const meal = mahlzeit.meals[i];
            const path = JSON.stringify(meal)
            addMealField(meal.name, meal.description, meal.price, path);
        }
    }
}

/* Fügt produkte zu Warenkorb hinzu */
function addShoppingCart(path) {
    let test = JSON.parse(path)
    shoppingCartArray.meals.push(test)
}

/* Überprüft ob localStorage leer oder gefühlt ist */
function checkLocalStorage() {
    if (localStorage.getItem('shoppingCart') !== null) {
        console.log('Koszyk nie jest pusty')
    } else {
        console.log('Koszyk jest pusty')
        shoppingCartIsEmpty()
    }
}


