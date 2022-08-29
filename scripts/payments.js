


let totalAmout = JSON.parse(localStorage.getItem('subTotal'));

console.log(totalAmout);

let totalMrp = document.getElementById('mrp');

totalMrp.innerText = `₹${totalAmout}`;

let finalAmount = document.getElementById('totalMrp');






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
