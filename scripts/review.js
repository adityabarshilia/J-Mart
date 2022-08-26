
let count = JSON.parse(localStorage.getItem("count")) || 0;
// count++;

let data = JSON.parse(localStorage.getItem("jiomart")) || [];

let productDetails = document.querySelector('.product-details');

let availableAmt = document.getElementById('available-amt');
let totalItems = document.getElementById('totalItems');
totalItems.textContent = count;

// total price update 
let mrp = document.getElementById('mrp');
let totalMRP = document.getElementById('tota-price');


function DisplayProducts(data) {


    // productDetails.innerHTML = null;

    let total = 0;

    data.forEach(function (el) {

        total += Number(el.price)

        let productItems = document.createElement('div');
        productItems.setAttribute('class', 'product-itemsdetails');

        let product_img = document.createElement('div');
        product_img.setAttribute('class', 'product-img');

        let img = document.createElement('img');
        img.setAttribute('src', el.image);

        let productName = document.createElement('div');
        productName.setAttribute('class', 'product-itemsName');

        let title = document.createElement('h4');
        title.innerText = el.title;

        let productPrice = document.createElement('div');
        productPrice.setAttribute('class', 'product-itemsPrice');

        let price1 = document.createElement('span');
        price1.innerText = `₹${el.price}`
        // let price2 = document.createElement('span');
        // price2.innerText = el.price;
        // let price3 = document.createElement('span');
        // price3.innerText = el.price;


        let qtyBox = document.createElement('div');
        qtyBox.setAttribute('id', 'qtyBox');

        let qty = document.createElement('div');
        qty.setAttribute('class', 'qyt');
        let p = document.createElement('p');
        p.innerText = 'Qty';
        let span = document.createElement('span');
        span.setAttribute('id', 'No_qyt');

        let div = document.createElement('div');
        let para = document.createElement('p');
        para.innerText = 'Delivery by tomorrow';


        productPrice.append(price1);
        productName.append(title, productPrice, qtyBox);
        product_img.append(img);

        qty.append(p, span);
        div.append(para);

        qtyBox.append(qty, div);

        let hr = document.createElement('hr')


        productItems.append(product_img, productName,);

        productDetails.append(productItems, hr);

        availableAmt.innerText = `₹${total}`
        mrp.textContent = `₹${total}`
        totalMRP.textContent = `₹${total}`


    });
}
DisplayProducts(data);