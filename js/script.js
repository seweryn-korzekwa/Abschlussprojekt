/* JSON Objekt */
const data = {
    pizza: {
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

function testLoad() {
    for (const dataKey in data) {

        let img = data[dataKey].img;
        let heading = data[dataKey].heading;
        testMealHeading(img, heading)

        for (let i = 0; i < data[dataKey].meal.length; i++) {

            let mealName = data[dataKey].meal[i].name;
            let mealDescription = data[dataKey].meal[i].description;
            let mealPrice = data[dataKey].meal[i].price;
            testMeals(mealName, mealDescription, mealPrice)
        }
    }
}

