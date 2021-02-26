/**
 * In der Datei befinden sich JSON-Objekte.
 * Diese Objekte verden von der main.js Datei verwendet um in der template.js Datei dynamisch Code zu generieren
 */

/**
 * JSON Objekt mit den Mahlzeiten
 * @type JSON
 */
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
};

/**
 * JSON Objekt als zwischenspeicher für den Warenkorb
 * @type JSON
 */
let shoppingCart = {
    meals: []
};