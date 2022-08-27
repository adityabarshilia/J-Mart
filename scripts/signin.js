import header from '../scripts/header.js';

document.getElementById("submit").addEventListener("click",submitted);
let Mob=JSON.parse(localStorage.getItem("mob"))||[];
let num = document.getElementById("num");


let nav = document.querySelector('nav');
nav.innerHTML = header();
nav.style.width = "100%";


let display_pin = document.getElementById('pin');

currentLocation();

function submitted(){

    if(num.value.length!=10){
       num.value="";
    //    console.log(num)
        return alert("Enter valid number!")
    }else{
        Mob = num.value;
        localStorage.setItem("mob",JSON.stringify(Mob));
        window.location.href="signup.html";
    }

    // if(data == []){
    //     alert("Please enter your Mobile Number!")
    //     window.location.href="signin.html";
    // }else{
    //     window.location.href="signup.html";
    // }

    // if(num.value == data){

    // }
    

    // let data={
    //     number:document.getElementById("num").value
    // }
    
    // // console.log(data);
    // signupData.push(data);

    
    // localStorage.setItem("data",JSON.stringify(signupData));
}

function currentLocation(){
    const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };
  
    async function success(pos) {
    const crd = pos.coords;
    // console.log(crd);
  
    let res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon=${crd.longitude}&limit=5&appid=63c3704e63cc40d74ad87bdb9f68f3b8`);
    let data = await res.json();
    let city = data[0].name;
    // console.log(city)
  
    let res2 = await fetch(`https://api.postalpincode.in/postoffice/${city}`);
    let data2 = await res2.json();
    console.log(data2[0].PostOffice[0].Pincode)
    display_pin.innerText = data2[0].PostOffice[0].Pincode;
    }
  
  
    function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

