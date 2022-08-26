import header from './header.js';
import footer from './footer.js';

let footer_div = document.querySelector('footer');
let nav = document.querySelector('nav');


footer_div.innerHTML = footer();
nav.innerHTML = header();
nav.style.width = "100%";
footer_div.style.width = "100%";

// Get Data 
getData();

async function getData(){

    try {
        let res = await fetch(`https://fakestoreapi.com/products`);  /// https://fakestoreapi.com/products/category/${cat}
        let data = await res.json();
            if(data == null){
                console.warn("You reach the limit!")
            }else{
                displayCards(data);
            }
    } catch (error) {
        console.log(error);
    }

}



// Display Cards
function displayCards(data){
    let cards_items = document.querySelector(".cards-items");
    cards_items.innerHTML = null;


    data.forEach((ele) =>{
        let cards = document.createElement("div");
        cards.setAttribute("class", "cards");
       

        // image div start
        let image = document.createElement("div");
        image.setAttribute("class", "image");
        image.addEventListener("click", function(){
            gotoInnerSection(ele);
        });
        let img = document.createElement("img");
        img.setAttribute("src", ele.image);
        image.append(img);                               
        // image div end

        // cards_des
        let cards_des = document.createElement("div");
        cards_des.setAttribute("class","cards-des");
      
        
        let title = document.createElement("span");
        title.setAttribute("class", "cat");
        title.innerText = ele.title.substring(0, 45)+"...";
        title.addEventListener("click", function(){
            gotoInnerSection(ele);
        });

        let price = document.createElement("span");
        price.setAttribute("class", "price");
        price.innerHTML = "M.R.P: &#8377;";
        price.addEventListener("click", function(){
            gotoInnerSection(ele);
        });

            let valueSpan = document.createElement("span");
            valueSpan.setAttribute("id", "value");
            valueSpan.innerText = ele.price;

        price.append(valueSpan);
        
        let button = document.createElement("button");
        button.setAttribute("class", "add_to_cart");
        button.innerText = "Add to Cart";
        button.addEventListener("click", function(){
            savelocalData(ele);
        });

        let span = document.createElement("span");
        span.innerText = "+";
        button.append(span);

        cards_des.append(title, price, button);
        cards.append(image,cards_des)

        cards_items.append(cards);


    });
   
}
/////////// popularity
let popularity = document.getElementById("popularity");
popularity.addEventListener("click", async function(){
    try {
        let res = await fetch(`https://fakestoreapi.com/products`);  /// https://fakestoreapi.com/products/category/${cat}
        let data = await res.json();
        let data_deff = [...data];
         data_deff = data_deff.filter((ele) =>{
            return ele.rating.rate >= 3.5;
         });
            displayCards(data_deff);
    } catch (error) {
        console.log(error);
    }
});
//////////////// All Product
let ap = document.getElementById("ap");
ap.addEventListener("click", async function(){
    try {
        let res = await fetch(`https://fakestoreapi.com/products`);  /// https://fakestoreapi.com/products/category/${cat}
        let data = await res.json();
            displayCards(data);
    } catch (error) {
        console.log(error);
    }
});
////////////////// High to Low
let hl = document.getElementById("hl");
hl.addEventListener("click", async function(){
    try {
        let res = await fetch(`https://fakestoreapi.com/products`);  /// https://fakestoreapi.com/products/category/${cat}
        let data = await res.json();
         data.sort((a, b) =>{
            return  b.price - a.price ;
         });
            displayCards(data);
    } catch (error) {
        console.log(error);
    }
});
/////////////// All Products
let lh = document.getElementById("lh");
lh.addEventListener("click", async function(){
    try {
        let res = await fetch(`https://fakestoreapi.com/products`);  /// https://fakestoreapi.com/products/category/${cat}
        let data = await res.json();
         data.sort((a, b) =>{
            return  a.price - b.price;
         });
            displayCards(data);
    } catch (error) {
        console.log(error);
    }
});
///////////////// Price Range
let price_range1 = document.getElementById("changeFilter");
price_range1.addEventListener("input", async function(){
    let id = null;
    clearTimeout(id);
    id = setTimeout(async () =>{
        try {
            let res = await fetch(`https://fakestoreapi.com/products`);  /// https://fakestoreapi.com/products/category/${cat}
            let data = await res.json();
            let data_deff = [...data];
             data_deff = data_deff.filter((ele) =>{
                return ele.price >= price_range1.value;
             });
                displayCards(data_deff);
        } catch (error) {
            console.log(error);
        }
    },1000);
});

////////////// Save Data localStorage

function savelocalData(ele){
    let count = JSON.parse(localStorage.getItem("count")) || 0;
    count++;
    localStorage.setItem("count", JSON.stringify(count));

    let data = JSON.parse(localStorage.getItem("jiomart")) || [];
    data.push(ele);
    localStorage.setItem("jiomart", JSON.stringify(data));
}

// Go To
function gotoInnerSection(ele){
    localStorage.setItem("check", JSON.stringify(ele));
    location.href = "inner-section.html";
}