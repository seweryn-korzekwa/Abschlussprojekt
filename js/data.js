/**
 * In der Datei befinden sich JSON-Objekte.
 * Diese Objekte verden von der template.js Datei verwendet um in der main.js Datei dynamisch Code zu generieren
 */

/**
 * JSON Objekt als zwischenspeicher für den Warenkorb
 * @type JSON
 */
let shoppingCart = {
    meals: []
};

/**
 * JSON Objekt mit den Mahlzeiten
 * @type JSON
 */
const data = {
    cutlet: {
        id: 'schnitzel',
        img: 'img/steak.jpg',
        heading: 'Schnitzel',
        meals: [
            {
                name: 'Zigeuner Schnitzel',
                description: 'Beschreibungstext',
                price: 12.50
            },
            {
                name: 'Wiener Schnitzel',
                description: 'Beschreibungstext',
                price: 11.00
            },
            {
                name: 'Bayerischer Schnitzel',
                description: 'Beschreibungstext',
                price: 14.50
            }
        ]
    },
    pizza: {
        id: 'pizza',
        img: 'img/pizza.jpg',
        heading: 'Pizza',
        meals: [
            {
                name: 'Pizza Margarita',
                description: 'Beschreibungstext',
                price: 6.50
            },
            {
                name: 'Pizza Salami',
                description: 'Beschreibungstext',
                price: 7.50
            },
            {
                name: 'Pizza Hawai',
                description: 'Beschreibungstext',
                price: 8.00
            }
        ],
    },
    burger: {
        id: 'burger',
        img: 'img/burger.jpg',
        heading: 'Burger',
        meals: [
            {
                name: 'Cheese Burger',
                description: 'Beschreibungstext',
                price: 6.50
            },
            {
                name: 'Hamburger',
                description: 'Beschreibungstext',
                price: 5.50
            },
            {
                name: 'Crispy Chicken Burger',
                description: 'Beschreibungstext',
                price: 8.00
            }
        ]
    },
    salad: {
        id: 'salad',
        img: 'img/salad.jpg',
        heading: 'Salate',
        meals: [
            {
                name: 'Griechischer Salat',
                description: 'Beschreibungstext',
                price: 7.50
            },
            {
                name: 'Italienischer Salat',
                description: 'Beschreibungstext',
                price: 8.00
            },
            {
                name: 'Putenstreifen Salat',
                description: 'Beschreibungstext',
                price: 9.50
            }
        ]
    },
    soup: {
        id: 'suppe',
        img: 'img/soup.jpg',
        heading: 'Suppe',
        meals: [
            {
                name: 'Hühner Suppe',
                description: 'Beschreibungstext',
                price: 5.50
            },
            {
                name: 'Kürbis Suppe',
                description: 'Beschreibungstext',
                price: 10.50
            },
            {
                name: 'Pilzen Suppe',
                description: 'Beschreibungstext',
                price: 7.00
            }
        ]
    },
    drinks: {
        id: 'drink',
        img: 'img/drink.jpg',
        heading: 'Getränke',
        meals: [
            {
                name: 'Coca Cola',
                description: 'Eine 0,3L Dose Coca Cola',
                price: 2.50
            },
            {
                name: 'Fanta',
                description: 'Eine 0,3L Dose Fanta',
                price: 2.50
            },
            {
                name: 'Sprite',
                description: 'Eine 0,3L Dose Sprite',
                price: 2.50
            }
        ]
    }
};
