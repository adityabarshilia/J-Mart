
// let count = JSON.parse(localStorage.getItem("count")) || 0;
// // count++;

// let data = JSON.parse(localStorage.getItem("jiomart")) || [];
// let count_display = document.getElementById('cart_counter');
// function displayCount() {
//     count_display.innerText = count;
//     // console.log(count);
// }


// showCart();
// function showCart() {
//     let data = JSON.parse(localStorage.getItem("jiomart")) || [];
//     let total_items = document.getElementById('total_items');
//     total_items.textContent = data.length;
// }

// let productDetails = document.querySelector('.product-details');

// let availableAmt = document.getElementById('available-amt');

// let mrp = document.getElementById('mrp');
// let totalMRP = document.querySelector('#tota-price');





function DisplayProducts(data) {


// function DisplayProducts() {
//     productDetails.innerHTML = null;
//     let data = JSON.parse(localStorage.getItem("jiomart")) || [];


//     let total = 0;

//     data.forEach(function (el) {

//         total += (Number(el.price) * el.count);
//         let sum = total.toFixed(2);



//         localStorage.setItem('subTotal', JSON.stringify(sum));

//         let productItems = document.createElement('div');
//         productItems.setAttribute('class', 'product-itemsdetails');

//         let product_img = document.createElement('div');
//         product_img.setAttribute('class', 'product-img');

//         let img = document.createElement('img');
//         img.setAttribute('src', el.image);

//         let productName = document.createElement('div');
//         productName.setAttribute('class', 'product-itemsName');

//         let title = document.createElement('h4');
//         title.innerText = el.title;

//         let productPrice = document.createElement('div');
//         productPrice.setAttribute('class', 'product-itemsPrice');

//         let price1 = document.createElement('span');
//         price1.innerText = `₹${el.price * el.count}`
//         let price2 = document.createElement('span');
//         price2.innerText = el.price;
//         let price3 = document.createElement('span');
//         price3.innerText = el.price;



//         let addRemoveBtn = document.createElement('div');
//         addRemoveBtn.setAttribute('class', 'product-qty');

//         let removeBtn = document.createElement('span');
//         let img1 = document.createElement('img');
//         img1.src = 'https://www.jiomart.com/msassets/images/icons/minus-bulecolor.svg';


//         removeBtn.addEventListener('click', function () {
//             removeCount(el.id);
//         });


//         let count = document.createElement('span');
//         count.setAttribute("id", "showCount3");
//         count.innerText = el.count;
//         // document.getElementById("showCount3").innerText = ele.count;

//         let addBtn = document.createElement('span');
//         addBtn.addEventListener('click', function () {
//             addCount(el.id);
//         });


//         let img2 = document.createElement('img');
//         img2.src = "https://www.jiomart.com/msassets/images/icons/plus-bluecolor.svg"
//         let div = document.createElement('div');
//         let hr = document.createElement('hr');

//         productPrice.append(price1);
//         productName.append(title, productPrice, addRemoveBtn);
//         product_img.append(img);


//         removeBtn.append(img1);
//         addBtn.append(img2);
//         addRemoveBtn.append(removeBtn, count, addBtn);

//         div.append(hr)


//         productItems.append(product_img, productName,);


//         productDetails.append(productItems, div);

        total += Number(el.price);


//         availableAmt.textContent = `₹${sum}`
//         mrp.textContent = `₹${sum}`
//         totalMRP.textContent = `₹${sum}`

//         // total_items.innerText = count;

//     });
// }



// DisplayProducts();


// function addCount(id) {
//     let data = JSON.parse(localStorage.getItem("jiomart")) || [];
//     let index = null;

//     for (let i = 0; i < data.length; i++) {
//         if (data[i].id == id) {
//             ``
//             index = i;
//         }
//     }

//     if (index !== null && data[index].count < 5) {
//         data[index].count++;
//         count++;
//         localStorage.setItem("count", JSON.stringify(count));
//         localStorage.setItem('jiomart', JSON.stringify(data));
//         DisplayProducts();
//         showCart()
//         displayCount()
//     } else {
//         alert("Max");
//     }



//     // console.log(1)
// }




// function removeCount(id) {
//     let data = JSON.parse(localStorage.getItem("jiomart")) || [];
//     let index = null;


//     for (let i = 0; i < data.length; i++) {
//         if (data[i].id == id) {
//             data[i].count--;
//             count--;
//             localStorage.setItem("count", JSON.stringify(count));
//             index = i;
//             break;
//         }
//     }

//     if (index !== null && data[index].count <= 0) {
//         data.splice(index, 1);
//     }

//     localStorage.setItem('jiomart', JSON.stringify(data));
//     DisplayProducts();
//     showCart()
//     displayCount();

// }

// // if (data.length == 0) {

// // }



// coupon code //

let totalAmout = JSON.parse(localStorage.getItem('subTotal'));

// console.log(totalAmout * (0.3))

let couponData = JSON.parse(localStorage.getItem("coupon"));
let dc = couponData.disAmount;

let ta = couponData.totalAmout;


let disCoupon = document.getElementById('dis-Coupon');
disCoupon.innerText = `₹${dc}`;

let saveTotal = document.getElementById('total-save');
saveTotal.innerText = `₹${dc}`;

let totalMRP = document.querySelector('#tota-price');
totalMRP.innerText = `₹${ta}`;


function checkCoupon() {

    let code = document.getElementById("cCode");
    let disAmount = document.getElementById('dis-Coupon');
    let totalPrice = document.getElementById('tota-price');


    if (code.value === "masai30") {

        let dis = Math.floor(totalAmout * (0.3));
        let tp = Math.floor((0.7) * totalAmout);

        disAmount.innerHTML = `₹${dis}`
        totalPrice.textContent = `₹${tp}`;

        let coupon = {
            disAmount: dis,
            totalAmout: tp
        }

        localStorage.setItem('coupon', JSON.stringify(coupon));

        alert('Coupon Applied Successfully');

    } else {
        alert("This Code is Not Valid");
    }

}



function placeOrder() {
    // let disAmount = document.getElementById("dis-Coupon");
    // let totalPrice = document.getElementById("totalPrice");


    window.location.href = "review.html"
}
