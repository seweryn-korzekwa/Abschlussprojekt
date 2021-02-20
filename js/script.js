
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
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                price: 11.50
            },
            {
                name: 'Pizza Diablo',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
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
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
                price: 11.50
            },
            {
                name: 'Pizza Diablo',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
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
        const mahlzeit = data[dataKey];
        addMealHeading(mahlzeit.id, mahlzeit.img, mahlzeit.heading);

        for (let i = 0; i < mahlzeit.meals.length; i++) {
            const meal = mahlzeit.meals[i];
            addMealField(meal.name, meal.description, meal.price);
        }
    }
}

