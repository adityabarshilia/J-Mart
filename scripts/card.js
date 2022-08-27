

let count = JSON.parse(localStorage.getItem("count")) || 0;
// count++;

let data = JSON.parse(localStorage.getItem("jiomart")) || [];

let total_items = document.getElementById('total_items');
total_items.textContent = count;


let productDetails = document.querySelector('.product-details');

let availableAmt = document.getElementById('available-amt');

let mrp = document.getElementById('mrp');
let totalMRP = document.querySelector('#tota-price');



function DisplayProducts(data) {


    // productDetails.innerHTML = null;

    let total = 0;

    data.forEach(function (el) {

        total += Number(el.price);

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
        let price2 = document.createElement('span');
        price2.innerText = el.price;
        let price3 = document.createElement('span');
        price3.innerText = el.price;



        let addRemoveBtn = document.createElement('div');
        addRemoveBtn.setAttribute('class', 'product-qty');

        let removeBtn = document.createElement('span');
        let img1 = document.createElement('img');
        img1.src = 'https://www.jiomart.com/msassets/images/icons/minus-bulecolor.svg';

        let count = document.createElement('span');
        count.innerText = '0';

        let addBtn = document.createElement('span');
        let img2 = document.createElement('img');
        img2.src = "https://www.jiomart.com/msassets/images/icons/plus-bluecolor.svg"
        let div = document.createElement('div');
        let hr = document.createElement('hr');

        productPrice.append(price1, price2, price3);
        productName.append(title, productPrice, addRemoveBtn);
        product_img.append(img);


        removeBtn.append(img1);
        addBtn.append(img2);
        addRemoveBtn.append(removeBtn, count, addBtn);

        div.append(hr)


        productItems.append(product_img, productName,);

        productDetails.append(productItems, div);

        availableAmt.textContent = `₹${total}`
        mrp.textContent = `₹${total}`
        totalMRP.textContent = `₹${total}`

        // total_items.innerText = count;
    });
}



DisplayProducts(data);