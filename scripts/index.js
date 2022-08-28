import header from './header.js';
import footer from './footer.js';

let cart_count;
let carousel1 = document.getElementById('myCarousel');
let header_div = document.querySelector('.header');
let footer_div = document.getElementById('footer_container');
let lc = document.getElementById('lc');
let rc = document.getElementById('rc');
let signUpData = JSON.parse(localStorage.getItem('signupData'));
let msg = document.getElementById('msg');





currentLocation();

header_div.innerHTML = header();
footer_div.innerHTML = footer();
header_div.style.display = 'block';
carousel1.style.marginTop = "130px";
lc.style.marginTop = "130px";
rc.style.marginTop = "130px";
lc.style.height = "320px";
rc.style.height = "320px";

let burger = document.getElementById('burger');
let sidebar_con = document.querySelector('.s_container');
let closebtn = document.querySelector('.myicon');
let display_pin = document.getElementById('pin');
let Addbtns = document.querySelectorAll('.btn');
let count_display = document.getElementById('cart_counter');
// let signupData=JSON.parse(localStorage.getItem("data"))|| [];
let sibtn = document.getElementById('si_btn');
let sitext = document.getElementById('acctext');

displayCount();


if(signUpData !== null){
    sitext.innerText = signUpData.firstname + signUpData.lastname;
    msg.innerText = `Hello, ${signUpData.firstname + signUpData.lastname}`;
    msg.style.marginLeft = '-100px';
    sibtn.href = "accountdetails.html";
}

Addbtns.forEach(val => val.addEventListener('click', () => {
    counter();
}));

burger.addEventListener('click', () => {
    sidebar_con.style.width = '330px';
});

closebtn.addEventListener('click', () => {
    sidebar_con.style.width = '0px';
});



 

function counter(){
    cart_count += 1;
    localStorage.setItem('count', JSON.stringify(cart_count));
    displayCount();
}

function displayCount(){
    cart_count = JSON.parse(localStorage.getItem('count'))||0;
    count_display.innerText = +cart_count;
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
    // console.log(data2[0])
    display_pin.innerText = data2[0].PostOffice[0].Pincode;
    }


    function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}