let addressData = JSON.parse(localStorage.getItem("address"));
let signUpData = JSON.parse(localStorage.getItem('signupData'));

let showAddress = document.getElementById("addressData");

let form = document.querySelector("#address-form");
// let houseNo = document.getElementById("hno");
let edit = document.getElementById("edit");
let editbtn = document.getElementById("editbtn");
let username = document.getElementById("user");

username.innerText = `${signUpData.firstname} ${signUpData.lastname}`;

editbtn.addEventListener('click', toggleForm);

function toggleForm(){
    form.style.display = 'grid';
    showAddress.style.display = "none";
    edit.style.display = "none";
}

adressdis();

function adressdis() {
  addressData = JSON.parse(localStorage.getItem("address"));
  if (addressData !== null) {
    
    showAddress.style.display = "block";
   
    document.getElementById("fno").innerText = addressData.houseNo;
    document.getElementById("fno").innerText = addressData.floorNo;
    document.getElementById("tno").innerText = addressData.towerNo;
    document.getElementById("bname").innerText = addressData.buildingName;
    document.getElementById("addr").innerText = addressData.address;
    document.getElementById("lm").innerText = addressData.landmark;
    document.getElementById("pin").innerText = addressData.pinCode;

   
    edit.style.display = "block";
    form.style.display = "none";
  }
}

function updateAddress() {
  // showAddress.style.display = 'none';
  // edit.style.display = 'none'
  // form.style.display = "block";
}

setTimeout(() => {
  document.getElementById("loading_screen").style.display = "none";
}, 1500);

let count = JSON.parse(localStorage.getItem("count")) || 0;
// count++;

let data = JSON.parse(localStorage.getItem("jiomart")) || [];

let productDetails = document.querySelector(".product-details");

let availableAmt = document.getElementById("available-amt");

let totalItems = document.getElementById("totalItems");
totalItems.textContent = data.length;

// total price update
let mrp = document.getElementById("mrp");
let totalMRP = document.getElementById("tota-price");

function DisplayProducts(data) {
  // productDetails.innerHTML = null;

  let total = 0;

  data.forEach(function (el) {
    total += Number(el.price) * el.count;
    let sum = total.toFixed(2);

    let productItems = document.createElement("div");
    productItems.setAttribute("class", "product-itemsdetails");

    let product_img = document.createElement("div");
    product_img.setAttribute("class", "product-img");

    let img = document.createElement("img");
    img.setAttribute("src", el.image);

    let productName = document.createElement("div");
    productName.setAttribute("class", "product-itemsName");

    let title = document.createElement("h4");
    title.innerText = el.title;

    let productPrice = document.createElement("div");
    productPrice.setAttribute("class", "product-itemsPrice");

    let price1 = document.createElement("span");
    price1.innerText = `₹${el.price * el.count}`;
    // let price2 = document.createElement('span');
    // price2.innerText = el.price;
    // let price3 = document.createElement('span');
    // price3.innerText = el.price;

    let qtyBox = document.createElement("div");
    qtyBox.setAttribute("id", "qtyBox");

    let qty = document.createElement("div");
    qty.setAttribute("class", "qyt");
    let p = document.createElement("p");
    p.innerText = `Qty ${el.count}`;
    let span = document.createElement("span");
    span.setAttribute("id", "No_qyt");

    let div = document.createElement("div");
    let para = document.createElement("p");
    para.innerText = "Delivery by tomorrow";

    productPrice.append(price1);
    productName.append(title, productPrice, qtyBox);
    product_img.append(img);

    qty.append(p, span);
    div.append(para);

    qtyBox.append(qty, div);

    let hr = document.createElement("hr");

    productItems.append(product_img, productName);

    productDetails.append(productItems, hr);

    availableAmt.innerText = `₹${sum}`;
    mrp.textContent = `₹${sum}`;
    totalMRP.textContent = `₹${sum}`;
  });
}
DisplayProducts(data);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let dataOfAdress = {
    houseNo: form.houseNo.value,
    floorNo: form.floorNo.value,
    towerNo: form.towerNo.value,
    buildingName: form.buildingName.value,
    address: address.value,
    landmark: form.landmark.value,
    pinCode: form.pinCode.value,
  };

  // addressData.push(dataOfAdress);
  localStorage.setItem("address", JSON.stringify(dataOfAdress));

  addressData = JSON.parse(localStorage.getItem("address"));

  console.log(addressData);
  ////

//   showAddress.innerHTML = addressData.houseNo;
  showAddress.style.display = "block";

  adressdis();
});

// coupon

let totalAmout = JSON.parse(localStorage.getItem("subTotal"));

// console.log(totalAmout * (0.3))

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
  totalMRP.innerText = `₹${ta}`;
}else{
    disCoupon.innerText = `₹0`;
    saveTotal.innerText = `₹0`;
}
