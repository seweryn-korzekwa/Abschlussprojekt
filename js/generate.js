
/* ------------------------------------------------------------------------------------------------------------------ */
/* --- ATTRIBUTEN --------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------ */

/* Konstante mit der Speisekarte container ID, um funktionen abzukürzen  */
const mainCont = document.getElementById('mainContainer');

/* ------------------------------------------------------------------------------------------------------------------ */
/* --- FUNKTIONEN --------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------------------ */

/* die Funktion generiert einen überschrift mit Bild für die jeweiligen sektionen der Speisekarte */
function addMealHeading(id, img, heading) {
    return mainCont.innerHTML += `
        <div class="heading_container">
        <img id="${id}" class="heading_img" src="${img}" alt="Image">
        <h2 class="heading_txt">${heading}</h2>
        </div>
    `
}

/* die Funktion generiert einen container mit informationen aus der speisekarte */
function addMealField(mealName, mealDescription, mealPrice) {
    return mainCont.innerHTML += `
        <div class="meal_container">
        <h3 class="meal_titel">${mealName}</h3>
        <span class="meal_description">${mealDescription}</span>
        <span class="meal_price">${mealPrice} &euro;</span>
        </div>
    `
}