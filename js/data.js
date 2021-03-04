/**
 * In der Datei befinden sich JSON-Objekte.
 * Diese Objekte verden von der template.js Datei verwendet um in der main.js Datei dynamisch Code zu generieren
 */

/**
 * todo: Speisekarte verbessern
 * JSON Objekt mit den Mahlzeiten
 * @type JSON
 */
const data = {
    pizza: {
        id: 'pizza',
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
        ],
    },
    salad: {
        id: 'salad',
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
    },
    drinks: {
        id: 'driks',
        img: 'img/pizza-bg.jpg',
        heading: 'Getränke',
        meals: [
            {
                name: 'Coca Cola',
                description: 'Eine Kalte 0,3L Dose Coca Cola',
                price: 2.50
            },
            {
                name: 'Fanta',
                description: 'Eine Kalte 0,3L Dose Fanta',
                price: 2.50
            },
            {
                name: 'Sprite',
                description: 'Eine Kalte 0,3L Dose Sprite',
                price: 2.50
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