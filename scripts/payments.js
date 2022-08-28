


let totalAmout = JSON.parse(localStorage.getItem('subTotal'));

console.log(totalAmout);

let totalMrp = document.getElementById('mrp');

totalMrp.innerText = `₹${totalAmout}`;

let finalAmount = document.getElementById('totalMrp');

finalAmount.innerText = `₹${totalAmout}`




//    coupon


let couponData = JSON.parse(localStorage.getItem("coupon"));
let dc = couponData.disAmount;

let ta = couponData.totalAmout;

console.log(ta)


let disCoupon = document.getElementById('dis-Coupon');
disCoupon.innerText = `₹${dc}`;

let saveTotal = document.getElementById('total-save');
saveTotal.innerText = `₹${dc}`;

let totalMRP = document.querySelector('#totalMrp');
totalMRP.innerText = `₹${ta}`;

setTimeout(() => {
    document.getElementById('loading_screen').style.display = "none";
}, 1500);
