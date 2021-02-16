/* fixme: bezeichner anpassen */
/* TODO: code dokumentieren */

const data = {
    pizza: {
        img: '',
        categoryName: 'Pizza',
        mealPosition: [
            {
                meal_name: 'Pizza Diablo',
                meal_description: 'Pizza mit Salami, Pilze und sehr scharf',
                meal_price: 11.50
            },
            {
                meal_name: 'Pizza Margarita',
                meal_description: 'Pizza mit Tomaten, Gurke und Mozzarella',
                meal_price: 9.00
            }
        ]
    },
    salad: {
        img: '',
        categoryName: 'Salate',
        mealPosition: [
            {
                meal_name: 'Pizza Diablo',
                meal_description: 'Pizza mit Salami, Pilze und sehr scharf',
                meal_price: 11.50
            },
            {
                meal_name: 'Pizza Margarita',
                meal_description: 'Pizza mit Tomaten, Gurke und Mozzarella',
                meal_price: 9.00
            }
        ]
    }
}

function mealLoad() {
    for (const dataKey in data) {
        let mainCont = document.getElementById('mainContainer');
        mainCont.innerHTML += `<h1>${data[dataKey].categoryName}</h1>`
        for (let i = 0; i < data[dataKey].mealPosition.length; i++) {
            mainCont.innerHTML += `
            <div class="meal_container">
            <span class="meal_titel"> ${data[dataKey].mealPosition[i].meal_name} </span>
            <span class="meal_description"> ${data[dataKey].mealPosition[i].meal_description} </span>
            <span class="meal_price"> ${data[dataKey].mealPosition[i].meal_price} &euro;</span>
            </div>
        `
        }
    }
}
