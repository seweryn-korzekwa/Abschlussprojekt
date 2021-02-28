/**
 * In der Datei befinden sich JSON-Objekte.
 * Diese Objekte verden von der template.js Datei verwendet um in der main.js Datei dynamisch Code zu generieren
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
                price: 7.50
            },
            {
                name: 'Pizza Polska',
                description: 'In der zukunft kommt hier ein Beschreibung Text',
                price: 100.50
            }
        ]
    },
    salad: {
        id: "salad",
        img: 'img/pizza-bg.jpg',
        heading: 'Salate',
        meals: [
            {
                name: 'Pizza Niemiecka',
                description: 'In der zukunft kommt hier ein Beschreibung Text',
                price: 9.50
            },
            {
                name: 'Pizza Chinska',
                description: 'In der zukunft kommt hier ein Beschreibung Text',
                price: 10.50
            }
        ]
    }
};

/**
 * JSON Objekt als zwischenspeicher für den Warenkorb
 * @type JSON
 */
let shoppingCart = {
    /*totalPrice: 0, ich denke das ist unnötig*/
    meals: []
};