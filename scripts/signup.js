import header from "../scripts/header.js";

let form = document.querySelector("form");
let otptimer = document.getElementById("otptimer");
let resend = document.getElementById("resOTP");
let otp = document.getElementById("otp");
let waitingotp = document.getElementById("waitingotp");
// let verifybtn = document.getElementById("bttn");
let showMob = document.getElementById("getNumber");
let mobile = JSON.parse(localStorage.getItem("mob"));
let timer = 40;
let validotp = 12345;
let id;
let pwd = document.getElementById("password");
let cpwd = document.getElementById("cpassword");
let cmsg = document.getElementById("cmsg");
let wotp = document.getElementById('wotp');

showMob.innerText = mobile;

let nav = document.querySelector("nav");
nav.innerHTML = header();
nav.style.width = "100%";

let display_pin = document.getElementById("pin");

currentLocation();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let signUpData = {
    firstname: form.fname.value,
    lastname: form.lname.value,
    email: form.emailid.value,
    password: form.password.value,
    mobile: mobile,
  };

  if (pwd.value !== cpwd.value) {
    cmsg.innerText = "Passwords do no match!";
    pwd.value = "";
    cpwd.value = "";
    return;
  }

  if (timer == 0) alert("OTP expired");
  else if (otp.value != validotp){
    waitingotp.style.display = "none";
    wotp.style.display = "block";
  }else {
    localStorage.setItem("signupData", JSON.stringify(signUpData));
    console.log("yes");
    window.location.href = "index.html";
  }
  console.log(e);
});

resend.addEventListener("click", () => {
  timer = 40;
  waitingotp.style.display = "block";
  otptimer.innerText = timer;
  otpCountdown();
  resend.style.display = "none";
});

otpCountdown();

otptimer.innerText = timer;

function otpCountdown() {
  id = setInterval(() => {
    timer--;
    otptimer.innerText = timer;

    if (timer == 0) {
      otptimer.innerText = timer;
      resend.style.display = "block";
      waitingotp.style.display = "none";
      clearInterval(id);
    }
  }, 1000);
}

// let otp = null;
// otp = "999999";
// let signupData=JSON.parse(localStorage.getItem("data"))|| [];
// let getNumber = document.getElementById("getNumber");
// getNumber.innerText = signupData[signupData.length - 1].number;

// displaySecCount();

// function displaySecCount(){
// let wtp = document.querySelector("#watingotp");
// let wtpCount = document.querySelector("#otptimer");
// let resOTP = document.querySelector("#resOTP");
// resend.classList.add("hide");
//     wtp.classList.add("active");
//     let count = 45;
// let sec = setInterval(() =>{
//     wtpCount.innerText = count;
//     if(count <= 0){
//         clearInterval(sec);
//         otp = null;
//         count = 45;
//         resend.classList.remove("hide");
//         wtp.classList.remove("active");
//     }
//     count--;
// },1000);
// }

// let resend = document.querySelector(".resend");
// resend.addEventListener("click", function(){
//     otp = "999999";
//     displaySecCount();
// });

// let verify = document.getElementById("bttn");
// verify.addEventListener("click", function(){
//     let otpValue = document.getElementById("otp").value;
//     if(otpValue == otp){
//         otp = null;
//         alert("Successfull");
//         resend.classList.remove("hide");
//         wtp.classList.remove("active");
//     }else{
//         alert("Wrong OTP");
//     }
// });

let pass = document.querySelector(".pass");
pass.addEventListener("click", function () {
  let password = document.getElementById("password");
  password.type = "text";
  pass.style.display = "none";
  document.querySelector(".hpass").style.display = "block";
});

let hpass = document.querySelector(".hpass");
hpass.addEventListener("click", function () {
  let password = document.getElementById("password");
  password.type = "password";
  pass.style.display = "block";
  document.querySelector(".hpass").style.display = "none";
});

let cpass = document.querySelector(".cpass");
cpass.addEventListener("click", function () {
  let cpassword = document.getElementById("cpassword");
  cpassword.type = "text";
  cpass.style.display = "none";
  document.querySelector(".chpass").style.display = "block";
});
let chpass = document.querySelector(".chpass");
chpass.addEventListener("click", function () {
  let cpassword = document.getElementById("cpassword");
  cpassword.type = "password";
  cpass.style.display = "block";
  document.querySelector(".chpass").style.display = "none";
});

function currentLocation() {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  async function success(pos) {
    const crd = pos.coords;
    // console.log(crd);

    let res = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon=${crd.longitude}&limit=5&appid=63c3704e63cc40d74ad87bdb9f68f3b8`
    );
    let data = await res.json();
    let city = data[0].name;
    // console.log(city)

    let res2 = await fetch(`https://api.postalpincode.in/postoffice/${city}`);
    let data2 = await res2.json();
    console.log(data2[0].PostOffice[0].Pincode);
    display_pin.innerText = data2[0].PostOffice[0].Pincode;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

//////////////////////////////////////////////////////// Signup
