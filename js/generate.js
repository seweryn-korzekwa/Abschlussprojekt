let mainCont = document.getElementById('mainContainer');

function testMealHeading(img, heading) {
    return mainCont.innerHTML += `
        <div class="heading_container">
        <img class="heading_img" src="${img}" alt="Image">
        <h2 class="heading_txt">${heading}</h2>
        </div>
    `
}

function testMeals(mealName, mealDescription, mealPrice) {
    return mainCont.innerHTML += `
        <div class="meal_container">
        <h3 class="meal_titel">${mealName}</h3>
        <span class="meal_description">${mealDescription}</span>
        <span class="meal_price">${mealPrice} &euro;</span>
        </div>
    `
}