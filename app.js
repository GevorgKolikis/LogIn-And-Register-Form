var Login = document.getElementById("login");
var Register = document.getElementById("register");
var Btn = document.getElementById("btn");

function register(){
    Login.style.left = "-400px";
    Register.style.left = "50px";
    Btn.style.left = "110px";
};

function login(){
    Login.style.left = "50px";
    Register.style.left = "450px";
    Btn.style.left = "0";
};