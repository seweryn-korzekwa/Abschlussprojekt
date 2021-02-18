
/* ------------------------------------------------------------------------------------------------------------------ */
/* --- JSON --------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------ */

const data = {
    pizza: {
        id: "pizza",
        img: 'img/pizza-bg.jpg',
        heading: 'Pizza',
        meal: [
            {
                name: 'Pizza Diablo',
                description: 'Pizza mit Salami, Pilze und sehr scharf',
                price: 11.50
            },
            {
                name: 'Pizza Diablo',
                description: 'Pizza mit Salami, Pilze und sehr scharf',
                price: 11.50
            }
        ]
    },
    salad: {
        id: "salad",
        img: 'img/pizza-bg.jpg',
        heading: 'Salate',
        meal: [
            {
                name: 'Pizza Diablo',
                description: 'Pizza mit Salami, Pilze und sehr scharf',
                price: 11.50
            },
            {
                name: 'Pizza Diablo',
                description: 'Pizza mit Salami, Pilze und sehr scharf',
                price: 11.50
            }
        ]
    }
}

/* ------------------------------------------------------------------------------------------------------------------ */
/* --- FUNKTIONEN --------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------ */

function testLoad() {
    for (const dataKey in data) {
        addMealHeading(data[dataKey].id, data[dataKey].img, data[dataKey].heading)

        for (let i = 0; i < data[dataKey].meal.length; i++) {
            addMealField(data[dataKey].meal[i].name, data[dataKey].meal[i].description, data[dataKey].meal[i].price)
        }
    }
}

