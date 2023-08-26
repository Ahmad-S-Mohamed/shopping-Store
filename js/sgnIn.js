/*==================================
  12} when click sign up  
==================================*/
let signUp = document.getElementById("sign-up");
let cardSignUp = document.querySelector(".card-snUp");
let cardSn = document.querySelector(".card-sn");
let clickBack = document.querySelector(".arr-lft");

signUp.addEventListener("click", () => {
  cardSignUp.style.display="flex";
  cardSn.style.display="none";
});
clickBack.addEventListener("click", () => {
  cardSignUp.style.display="none";
  cardSn.style.display="flex";
});
