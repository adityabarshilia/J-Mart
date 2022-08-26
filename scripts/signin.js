// document.getElementById("submit").addEventListener("click",submitted);
// let signupData=JSON.parse(localStorage.getItem("data"))|| [];
// function submitted(){
//     let data={
//         number:document.getElementById("num").value
//     }
//     if(data.number.length!=10){
//         document.getElementById("num").value="";
//         return alert("Enter valid number!")

//     }
//     // console.log(data);
//     signupData.push(data);

//     if(data.number==""){
//         alert("Please enter your Mobile Number!")
//         window.location.href="signin.html";
//     }else{
//         window.location.href="signup.html";
//     }
//     localStorage.setItem("data",JSON.stringify(signupData));
// }


document.getElementById("submit").addEventListener("click",submitted);
let Mob=JSON.parse(localStorage.getItem("mob"))||[];
let num = document.getElementById("num");

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