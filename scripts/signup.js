
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
pass.addEventListener("click", function(){
    let password = document.getElementById("password");
    password.type = "text";
    pass.style.display = "none";
    document.querySelector(".hpass").style.display = "block";
});

let hpass = document.querySelector(".hpass");
hpass.addEventListener("click", function(){
    let password = document.getElementById("password");
    password.type = "password";
    pass.style.display = "block";
    document.querySelector(".hpass").style.display = "none";
});

let cpass = document.querySelector(".cpass");
cpass.addEventListener("click", function(){
    let cpassword = document.getElementById("cpassword");
    cpassword.type = "text";
    cpass.style.display = "none";
    document.querySelector(".chpass").style.display = "block";
});
let chpass = document.querySelector(".chpass");
chpass.addEventListener("click", function(){
    let cpassword = document.getElementById("cpassword");
    cpassword.type = "password";
    cpass.style.display = "block";
    document.querySelector(".chpass").style.display = "none";
});



//////////////////////////////////////////////////////// Signup

