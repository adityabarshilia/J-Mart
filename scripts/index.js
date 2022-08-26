import header from './header.js';
import footer from './footer.js';

let carousel1 = document.getElementById('myCarousel');
let header_div = document.querySelector('.header');
let footer_div = document.getElementById('footer_container');
let lc = document.getElementById('lc');
let rc = document.getElementById('rc');


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

burger.addEventListener('click', () => {
    sidebar_con.style.width = '330px';
});

closebtn.addEventListener('click', () => {
    sidebar_con.style.width = '0px';
});


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