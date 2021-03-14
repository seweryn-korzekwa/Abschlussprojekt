/**
 * In der Datei befinden sich funktionen die einen HTML-Templates dynamisch Generieren
 * Funktionen werden in der regel in der template.js Datei aufgerufen
 */

/**
 * ID's um befehle abzukürzen
 */
const mainCont = document.getElementById('mainContainer');
const navbar = document.getElementById('navigation');
const shoppingCartProductContainer = document.getElementById('shoppingCartProductContainer');
const subtotal = document.getElementById('subtotal');
const delivery = document.getElementById('delivery');
const totalPrice = document.getElementById('totalPrice')
const shoppingCartEmpty = document.getElementById('shoppingCartIsEmpty');

/**
 * Funktion fügt Links in der Navigation Container ein
 * @param {string} id
 * @param {string} name
 */
function addLinksToNavbar(id, name) {
     navbar.innerHTML += `
        <a href="#${id}">${name}</a>
    `;
}

/**
 * die Funktion generiert einen überschrift mit Bild für die jeweiligen sektionen der Speisekarte
 * @param {int} id
 * @param {string} img
 * @param {string} heading
 */
function addProductHeader(id, img, heading) {
     mainCont.innerHTML += `
        <div class="heading_container">
            <img id="${id}" class="heading_img" src="${img}" alt="Image">
            <h2 class="heading_txt">${heading}</h2>
        </div>
    `;
}

/**
 * die Funktion generiert einen container mit informationen aus der speisekarte
 * @param {int} mealName
 * @param {string} mealDescription
 * @param {int} mealPrice
 * @param {string} key
 * @param {int} index
 */
function addMealField(mealName, mealDescription, mealPrice, key, index) {
     mainCont.innerHTML += `
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
 */
function shoppingCartIsEmpty(minPrice) {
    shoppingCartEmpty.style.display = 'flex';
    subtotal.innerHTML = `<span>0 &euro;</span>`;
    delivery.innerHTML = `<span>0 &euro;</span>`;
    totalPrice.innerHTML = `<span>0 &euro;</span>`;
    btnOrder.innerHTML = `<span>Mindestbestellwert ${minPrice} &euro;</span>`;
    btnOrder.setAttribute('disabled', true);
}

/**
 *
 * @param {int} price
 * @param {int} deliveryCosts
 * @param {int} gesamtkosten
 */
function changePrice(price, deliveryCosts, gesamtkosten) {
    subtotal.innerHTML = `<span>${price.toFixed(2)} &euro;</span>`;
    delivery.innerHTML = `<span>${deliveryCosts.toFixed(2)} &euro;</span>`;
    totalPrice.innerHTML = `<span>${gesamtkosten.toFixed(2)} &euro;</span>`;
}

/**
 *
 * @param {Object} data
 * @param {String} dataKey
 */
function pushProduct(data, dataKey) {
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
    `;
}

/**
 *
 * @param {int} totalPrice
 * @param {int} min
 */
function updateButtonDisable(totalPrice, min) {
    btnOrder.innerHTML = `<span>Noch ${ min - totalPrice.toFixed(2)} &euro; um zu bestellen</span>`;
}

/**
 *
 * @param {int} totalPrice
 */
function updateButtonAktive(totalPrice) {
    btnOrder.innerHTML = `<span>${totalPrice.toFixed(2)} &euro;</span>`;

}
