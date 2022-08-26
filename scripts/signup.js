let form = document.querySelector("form");
let otptimer = document.getElementById("otptimer");
let resend = document.getElementById("resOTP");
let otp = document.getElementById("otp");
let waitingotp = document.getElementById("waitingotp");
let verifybtn = document.getElementById("bttn");
let timer = 40;
let validotp = 12345;
let id;

verifybtn.addEventListener("click", () => {
  let signUpData = {
    firstname: form.fname.value,
    lastname: form.lname.value,
    email: form.emailid.value,
    password: form.password.value,
  };

  if (timer == 0) alert("OTP expired");
  else if (otp.value != validotp) alert("Wrong OTP");
  else {
    localStorage.setItem("signupData", JSON.stringify(signUpData));
    console.log("yes");
    window.location.href = "../index.html";
    
    console.log(window.location.href)
  }
});

resend.addEventListener("click", () => {
  timer = 40;
  otpCountdown();
  resend.style.display = "none";
  waitingotp.style.display = "block";
});

otpCountdown();

otptimer.innerText = timer;

function otpCountdown() {
  id = setInterval(() => {
    timer--;
    otptimer.innerText = timer;

    if (timer == 0) {
      otptimer.innerText = timer;
      // timer = 40;
      resend.style.display = "block";
      waitingotp.style.display = "none";
      alert("resend otp");
      clearInterval(id);
    }
  }, 1000);
}
