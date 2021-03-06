/**
 * In der Datei befinden sich funktionen die einen HTML-Templates dynamisch Generieren
 * Funktionen werden in der regel in der template.js Datei aufgerufen
 */

/**
 * HTML ID's um befehle abzukürzen
 */
const mainCont = document.getElementById('mainContainer');
const navbar = document.getElementById('navigation');
const shoppingCartProductContainer = document.getElementById('shoppingCartProductContainer');
const subtotal = document.getElementById('subtotal');
const delivery = document.getElementById('delivery');
const totalPrice = document.getElementById('totalPrice')

/**
 * @param {string} id
 */
function addLinksToNavbar(id, name) {
     navbar.innerHTML += `
        <a href="#${id}">${name}</a>
    `
}

/**
 * die Funktion generiert einen überschrift mit Bild für die jeweiligen sektionen der Speisekarte
 * @param id
 * @param img
 * @param heading
 * @returns {string}
 */
function addMealHeading(id, img, heading) {
    return mainCont.innerHTML += `
        <div class="heading_container">
            <img id="${id}" class="heading_img" src="${img}" alt="Image">
            <h2 class="heading_txt">${heading}</h2>
        </div>
    `;
}

/**
 * die Funktion generiert einen container mit informationen aus der speisekarte
 * @param mealName
 * @param mealDescription
 * @param mealPrice
 * @param key
 * @param index
 * @returns {string}
 */
function addMealField(mealName, mealDescription, mealPrice, key, index) {
    return mainCont.innerHTML += `
        <div class="meal_container">
            <h3 class="meal_titel">${mealName}</h3>
            <span class="meal_description">${mealDescription}</span>
            <span class="meal_price">${mealPrice.toFixed(2)} &euro;</span>
            <span class="meal_add" onclick="clickButton('${key}', ${index})">+</span>
        </div>
    `;
}

/**
 * ie Funktion wird ausgeführt sobald localStorage leer ist beim Neuladen der seite
 * @returns {string}
 */
function shoppingCartIsEmpty() {
    document.getElementById('shoppingCartIsEmpty').style.display = 'flex'
    subtotal.innerHTML = `<span>0 &euro;</span>`;
    delivery.innerHTML = `<span>0 &euro;</span>`;
    totalPrice.innerHTML = `<span>0 &euro;</span>`;
    btn.innerHTML = `<span>Fülle dein Warenkorb</span>`;
    btn.setAttribute('disabled', true)
}

/**
 * Zweck der Funktion ist die HTML Elemente in Warenkorb anzuzeigen
 */
/* todo: ist mir zu viel js in der datei */
function pushToHTML() {
    const data = JSON.parse(localStorage.getItem('shoppingCart')).meals
    for (const dataKey in data) {
        shoppingCartProductContainer.innerHTML += `
            <div class="shopping_cart_item">
                <div class="space-between y-center">
                    <span class="shopping_cart_item_name">${data[dataKey].name}</span>
                    <div class="y-center">
                        <span class="shopping_cart_item_price">${data[dataKey].price.toFixed(2)} &euro;</span>
                        <div class="delete-img" onclick="deleteItem('${dataKey}')"></div>
                    </div>
                </div>
                <div>
                    <span class="shopping_cart_item_description">${data[dataKey].description}</span>
                </div>
            </div>
        `
    }
}
