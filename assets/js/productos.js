// Variables globales
let allContainerCart = document.querySelector('.productos-container');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

// Cargar los event listeners al cargar el documento
document.addEventListener('DOMContentLoaded', loadEventListeners);

// Función para cargar todos los event listeners
function loadEventListeners() {
    allContainerCart.addEventListener('click', addProduct);
    containerBuyCart.addEventListener('click', deleteProduct);
    document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
}

// Función para añadir un producto al carrito
function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

// Función para eliminar un producto del carrito
function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');
        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price.replace(/\./g, '').replace(',', '.')) * parseFloat(value.amount);
                totalCard -= priceReduce;
                totalCard = parseFloat(totalCard.toFixed(2));
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        countProduct--;
    }
    if (buyThings.length === 0) {
        priceTotal.innerHTML = '0 CLP';
        amountProduct.innerHTML = 0;
    }
    saveToLocalStorage();
    loadHtml();
}

// Función para leer el contenido de un producto
function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent.replace(/,/g, '').trim(),
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard += parseFloat(infoProduct.price.replace(/\./g, '').replace(',', '.'));
    totalCard = parseFloat(totalCard.toFixed(2));

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product;
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct];
        countProduct++;
    }
    saveToLocalStorage();
    loadHtml();
}

// Función para cargar el HTML del carrito
function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${parseFloat(price).toLocaleString('es-CL', {style: 'currency', currency: 'CLP'})}</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;
        containerBuyCart.appendChild(row);
    });

    priceTotal.innerHTML = `${totalCard.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'})}`;
    amountProduct.innerHTML = countProduct;
}

// Función para limpiar el HTML del carrito
function clearHtml() {
    containerBuyCart.innerHTML = '';
}

// Función para guardar datos en el almacenamiento local
function saveToLocalStorage() {
    localStorage.setItem('buyThings', JSON.stringify(buyThings));
    localStorage.setItem('totalCard', totalCard.toString());
    localStorage.setItem('countProduct', countProduct.toString());
}

// Función para cargar datos desde el almacenamiento local al cargar la página
function loadFromLocalStorage() {
    if (localStorage.getItem('buyThings')) {
        buyThings = JSON.parse(localStorage.getItem('buyThings'));
        totalCard = parseFloat(localStorage.getItem('totalCard'));
        countProduct = parseInt(localStorage.getItem('countProduct'));
        loadHtml();
    }
}

// Función para mostrar el carrito
function showCart() {
    document.getElementById("products-id").style.display = "block";
}

// Función para cerrar el carrito
function closeBtn() {
    document.getElementById("products-id").style.display = "none";
}
