/* Attribute */
let mainCont = document.getElementById('mainContainer');

/* JSON Objekt */
const data = {
    pizza: {
        img: '',
        categoryName: 'Pizza',
        mealPosition: [
            {
                mealName: 'Pizza Diablo',
                mealDescription: 'Pizza mit Salami, Pilze und sehr scharf',
                mealPrice: 11.50
            },
            {
                mealName: 'Pizza Diablo',
                mealDescription: 'Pizza mit Salami, Pilze und sehr scharf',
                mealPrice: 11.50
            }
        ]
    },
    salad: {
        img: '',
        categoryName: 'Salate',
        mealPosition: [
            {
                mealName: 'Pizza Diablo',
                mealDescription: 'Pizza mit Salami, Pilze und sehr scharf',
                mealPrice: 11.50
            },
            {
                mealName: 'Pizza Diablo',
                mealDescription: 'Pizza mit Salami, Pilze und sehr scharf',
                mealPrice: 11.50
            }
        ]
    }
}

/* Funktionen */
function mealLoad() {
    for (const dataKey in data) {

        mainCont.innerHTML += `<h1>${data[dataKey].categoryName}</h1>`

        for (let i = 0; i < data[dataKey].mealPosition.length; i++) {
            mainCont.innerHTML += `
            <div class="meal_container">
            <span class="meal_titel"> ${data[dataKey].mealPosition[i].mealName} </span>
            <span class="meal_description"> ${data[dataKey].mealPosition[i].mealDescription} </span>
            <span class="meal_price"> ${data[dataKey].mealPosition[i].mealPrice} &euro;</span>
            </div>
        `
        }
    }
}
