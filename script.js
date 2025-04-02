

function check(){

    var a = document.getElementById('pass_word');

    var b = document.getElementById('checking_checkbox');

    if(b.checked){
        a.type = "text";
    }
    else{
        a.type = "password";
    }


}


//  function spinning(){

//     var x = document.getElementById('loader');
//     x.style.opacity = 1;

//     var y = document.getElementById('pass_word').value;

//     var len = y.length;

//     if(len>=10){

//         x.style.opacity = 0;

//     } 

//     else if(len<10){
//         x.style.opacity = 1;

//     }

//     else if(len.trim == ""){
//         x.style.opacity = 0;
//     }

//     else{
//         alert("nothing");
//     }

//  }


let typingTimer;
const typingDelay = 500;

function spinning() {
    let loader = document.getElementById("loader");
    let password = document.getElementById("pass_word");

    loader.style.opacity = "1";

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
        loader.style.opacity = "0";
    }, typingDelay);
}




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", login);
});

function login(event) {

    event.preventDefault();

    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;

    if (username === "meet" && password === "1234") {
        alert("Login successfully.");
        setTimeout(function(){
            window.location.href = "./home.html";
        }, 1000);
    } else {
        alert("Login failed");
    }
}
