let data = JSON.parse(localStorage.getItem("check"));

let small_img = document.querySelector(".small-img > img");
small_img.src = data.image;
let item_img = document.querySelector(".item-img > img");
item_img.src = data.image;

document.title = data.title.substring(0,20)+"...";

let link = document.getElementById("link");
link.innerText = data.title.substring(0,30)+"...";

let title = document.querySelector(".all-description > h1:first-child");
title.innerText = data.title;

let rs = document.getElementById("rs");
rs.innerText = data.price;

let title1 = document.getElementById("title");
title1.innerText = data.title;

let description = document.getElementById("description");
description.innerText = data.description;

let ratingCount = document.getElementById("ratingCount");
ratingCount.innerText = data.rating.rate;

let basedon = document.getElementById("basedon");
basedon.innerText = data.rating.count;

let i_add_to_cart = document.querySelector(".i_add_to_cart");
i_add_to_cart.addEventListener("click", function(){
    let jiomart = JSON.parse(localStorage.getItem("jiomart")) || [];
    jiomart.push(data);
    localStorage.setItem("jiomart", JSON.stringify(jiomart));
});