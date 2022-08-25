import header from './header.js';
import footer from './footer.js';

let carousel1 = document.getElementById('myCarousel');
let header_div = document.querySelector('.header');
let footer_div = document.getElementById('footer_container');
let lc = document.getElementById('lc');
let rc = document.getElementById('rc');


// currentLocation();

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

burger.addEventListener('click', () => {
    sidebar_con.style.width = '330px';
});

closebtn.addEventListener('click', () => {
    sidebar_con.style.width = '0px';
});


// function currentLocation(){
//     const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//     };

//     async function success(pos) {
//     const crd = pos.coords;
//     let add;
//     // console.log(crd);

//     // let res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon=${crd.longitude}&limit=5&appid=63c3704e63cc40d74ad87bdb9f68f3b8`);
//     // let data = await res.json();
//     // console.log(data);

//     let geocoder = new google.maps.Geocoder();
//     let latlng = new google.maps.LatLng(lat, lng);
//     geocoder.geocode({ latLng: latlng }, function (results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         if (results[0]) {
//            add = results[0].formatted_address;
//         }
//       }
//     });

//     console.log(add);
//     }


//     function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//     }

//     navigator.geolocation.getCurrentPosition(success, error, options);
// }