
let totalAmout = JSON.parse(localStorage.getItem('subTotal'));
let addressData = JSON.parse(localStorage.getItem("address"));
let signUpData = JSON.parse(localStorage.getItem('signupData'));



document.getElementById('btnOrder').addEventListener('click', () => {
localStorage.removeItem('jiomart');
localStorage.removeItem('coupon');
localStorage.removeItem('count');
window.location.href = "index.html";
})
let A = document.getElementById("hno");
let B = document.getElementById("fno");
let C = document.getElementById("tno");
let D = document.getElementById("bname");
let E = document.getElementById("addr");
let F = document.getElementById("lm");
let G = document.getElementById("pin");

    document.getElementById("username").innerText = `${signUpData.firstname} ${signUpData.lastname}`;


   A.innerText = addressData.floorNo;
    B.innerText = addressData.floorNo;
    C.innerText = addressData.towerNo;
   D.innerText = addressData.buildingName;
    E.innerText = addressData.address;
   F.innerText = addressData.landmark;
   G.innerText = addressData.pinCode;




console.log(totalAmout);username

let totalMrp = document.getElementById('finalAmount');

totalMrp.innerText = `₹${totalAmout}`;

let finalAmount = document.getElementById('totalMrp');

// finalAmount.innerText = `₹${totalAmout}`



//    coupon
let couponData = JSON.parse(localStorage.getItem("coupon"));
let disCoupon = document.getElementById("dis-Coupon");
let saveTotal = document.getElementById("total-save");
let dc, ta;

if (couponData !== null) {
    dc = couponData.disAmount;
  
     ta = couponData.totalAmout;
  
  //   console.log(disCoupon)
    disCoupon.innerText = `₹${dc}`;
  
    saveTotal.innerText = `₹${dc}`;saveTotal.innerText = `₹${dc}`;
  
    // let totalMRP = document.querySelector('#tota-price');
    finalAmount.innerText = `₹${ta}`;
  }else{
      disCoupon.innerText = `₹0`;
      saveTotal.innerText = `₹0`;
      finalAmount.innerText = `₹${totalAmout}`
  }

setTimeout(() => {
    document.getElementById('loading_screen').style.display = "none";
}, 1500);

