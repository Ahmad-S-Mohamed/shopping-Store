/*===============================
first => Header
    1} show langug list & hidden 
    2} click btn Search to show
    3} click cart & clickX
    4} show products Added in cart
    5} show products Favorit in cart
Secound => Landing
    6} auto slider & show products 
    7}List product (side slider)
    8} media Screen
third =>  Products   
    9} list Products
    10}list suits Products
four => 
    11} button scroll
=====================================*/

//  get element

let navBar = document.querySelector("nav"),
  searchBox = navBar.querySelector(".search-box"),
  btnSearch = navBar.querySelector(".search-ico"),
  aryaLang = navBar.querySelector(".ariya-lang"),
  barEnSn = navBar.querySelector("#bar-othLink"),
  listEnSn = navBar.querySelector(".links-list"),
  listEnSnAll = navBar.querySelectorAll(".links-list li"),
  Langico = navBar.querySelector(".en-ico"),
  clickX = navBar.querySelector(".clickClose"),
  icoCart = navBar.querySelector(".ico-Cart"),
  walletShop = navBar.querySelector(".wallet-dw"),
  walletShopList = navBar.querySelector(".wallet-dw ul"),
  aryaLangAll = navBar.querySelector(".ariya-lang ul"),
  allLiTag = aryaLangAll.querySelectorAll("li"),
  langugList = navBar.querySelector(".all-languag"),
  langListIco = navBar.querySelector(".ariya-lang>a~i"),
  ptnCart = navBar.querySelector("#pt-cartAdd"),
  prodAdded = navBar.querySelector(".added-prod"),
  prodAddedIco = navBar.querySelector("#pt-cartAdd>i~i"),
  ptnfavorit = navBar.querySelector("#ptn-favorit"),
  prodFavorit = navBar.querySelector(".favorit-prod"),
  prodFavoritIco = navBar.querySelector("#ptn-favorit>i~i");

/*!==================================
!1} show langug list & hidden when click & hover Element
!==================================*/
aryaLang.addEventListener("click", () => {
  let textIcoDown = langListIco.classList.contains("fa-caret-down"); // chang icon class & show list when click
  if (textIcoDown) {
    showIco();
  }
  if (!textIcoDown) {
    hiddenIco();
  }
});
// chang icon class & show & hidden list when hover

if (window.matchMedia("(max-width: 770px)").matches) {
  listEnSn.addEventListener("mouseover", () => {
    listEnSn.style.display = "block";
  });
  listEnSn.addEventListener("mouseout", () => {
    listEnSn.style.display = "none";
  });
}

// chang icon class & show & hidden list when hover for language List
aryaLangAll.addEventListener("mouseover", () => {
  showIco();
});
aryaLang.addEventListener("mouseout", () => {
  hiddenIco();
});

function showIco() {
  langugList.style.display = "block";
  langListIco.classList.remove("fa-caret-down");
  langListIco.classList.add("fa-caret-up");
}
function hiddenIco() {
  langugList.style.display = "none";
  langListIco.classList.add("fa-caret-down");
  langListIco.classList.remove("fa-caret-up");
}

/*!!?==================================
2} click btn Search to show
==================================*/
if (window.matchMedia("(max-width: 600px)").matches) {
  btnSearch.addEventListener("click", () => {
    let texStyle = searchBox.style.display;
    switch (texStyle) {
      case (searchBox.style.display = "none"):
        searchBox.style.display = "block";
        searchBox.style.backgroundImage =
          "linear-gradient(to left, #29292d, #fff9f9)";
        break;
      case (searchBox.style.display = "block"):
        searchBox.style.display = "none";
        break;
    }
  });
}

/*!!?==================================
3} click cart & clickX
==================================*/

// Icon Cart
icoCart.addEventListener("click", () => {
  let textStyle = (walletShop.style.display = "none");
  if (textStyle) {
    walletShop.style.display = "block";
    walletShop.style.right = "0px";
  }
});
// icon X
clickX.addEventListener("click", () => {
  let textStyleX = (walletShop.style.display = "block");
  if ((walletShop.style.display = "block")) {
    walletShop.style.display = "none";
  }
});

walletShopList.addEventListener("mouseover", () => {
  walletShop.style.display = "block";
});

walletShopList.addEventListener("mouseout", () => {
  walletShop.style.display = "none";
});

/*!==================================
!4} show products Added in cart
!==================================*/
ptnCart.addEventListener("click", () => {
  let textIn = prodAddedIco.classList.contains("fa-caret-down"); // chang icon class & show list when click
  if (textIn) {
    prodAdded.style.display = "block";
    prodAddedIco.classList.remove("fa-caret-down");
    prodAddedIco.classList.add("fa-caret-up");
  }
  if (!textIn) {
    prodAdded.style.display = "none";
    prodAddedIco.classList.add("fa-caret-down");
    prodAddedIco.classList.remove("fa-caret-up");
  }
});
/*!==================================
!5} show products Favorit in cart
!==================================*/
ptnfavorit.addEventListener("click", () => {
  let textIn = prodFavoritIco.classList.contains("fa-caret-down"); // chang icon class & show list when click
  if (textIn) {
    prodFavorit.style.display = "block";
    prodFavoritIco.classList.remove("fa-caret-down");
    prodFavoritIco.classList.add("fa-caret-up");
  }
  if (!textIn) {
    prodFavorit.style.display = "none";
    prodFavoritIco.classList.add("fa-caret-down");
    prodFavoritIco.classList.remove("fa-caret-up");
  }
});

/*==================================
  6} auto slider & show products 
==================================*/
// get element
let landingPg = document.querySelector(".landing"),
  librProducts = landingPg.querySelector(".libr-products"),
  listProducts = landingPg.querySelector(".list-products"),
  imgProducts = landingPg.querySelector(".list-products img"),
  titlProducts = landingPg.querySelector("#title-prd"),
  describProducts = landingPg.querySelector("#describ-prod"),
  pricProducts = landingPg.querySelector("#pric"),
  ptnNext = librProducts.querySelector("#next"),
  ptnBack = librProducts.querySelector("#back");

let indexproduct = 2;

function showProduct(indexNum) {
  titlProducts.innerText = allProducts[indexNum - 1].title;
  describProducts.innerText = allProducts[indexNum - 1].describ;
  pricProducts.innerText = ` ${allProducts[indexNum - 1].price} $`;
  imgProducts.src = `imag/${allProducts[indexNum - 1].image}.jfif `;
}

// click next & back for call product
ptnNext.addEventListener("click", () => {
  indexproduct++;
  indexproduct > allProducts.length
    ? (indexproduct = 1)
    : (indexproduct = indexproduct);
  showProduct(indexproduct);
});
ptnBack.addEventListener("click", () => {
  indexproduct--;
  indexproduct < 1
    ? (indexproduct = allProducts.length)
    : (indexproduct = indexproduct);
  showProduct(indexproduct);
});

setInterval(()=>{
  indexproduct++;
  indexproduct > allProducts.length
  ? (indexproduct = 1)
  : (indexproduct = indexproduct);
  showProduct(indexproduct);
}, 5000);

showProduct(indexproduct);

/*==================================
  7} List product (side slider)
==================================*/
// get element
let otersProducts = document.querySelector(".others-products"),
  listProd = otersProducts.querySelector(".list-prod");

for (let i = 0; i < allProd.length; i++) {
  let creatProducts = `<li class="arya-prod">
  <img id="img-prodSl" src= "imag/${allProd[i].image}.jfif" alt="">
  <div class="oth-prod"> 
    <div class="text-deat">
      <h2><span id="title-prd">${allProd[i].title}</span></h2>
      <h3><mark id="pric-prd"> ${allProd[i].price} $ </mark></h3> 
    </div>
    </div> 
    <div class="ic-shop">
      <i class="fa-solid fa-cart-plus "></i>
      <i class="fa-regular fa-heart "></i>
    </div>
</li>`;
  listProd.insertAdjacentHTML("beforeend", creatProducts); //Add Elements insert ul & loop
}

/*==================================
  8} Media screen 
==================================*/
// menu header
let barOthersLink = document.getElementById("bar-othLink");
let othersLinkList = document.querySelector(".links-list");

barOthersLink.addEventListener("click", () => {
  let textineer = othersLinkList.style.display;
  switch (textineer) {
    case (othersLinkList.style.display = "none"):
      othersLinkList.style.display = "block";
      break;
    case (othersLinkList.style.display = "block"):
      othersLinkList.style.display = "none";
      break;
  }
});
/*==================================
  9} list Products
==================================*/
// getelements

let productsAll = document.querySelector(".products"),
  productsGroub = productsAll.querySelector(".products-carts");
let aryaCards = document.querySelector(".arya-product");
let cardimg = document.querySelectorAll(".arya-product img");
let cartImag = document.getElementById("cart-img");
let cards = document.querySelectorAll(".arya-product");

//  use loop to creat all Products
for (let j = 0; j < productscart.length; j++) {
  const element = `<div 
        class="arya-product">
          <img id="img-up" src="imag/${
            productscart[j].image
          }.webp" alt=""></img>
          <img id="img-back" src="imag/cart-${[j + 1]}.webp" alt=""></img>
          <img id="img-bigSale" src="imag/bigSale.png" alt=""/>
          <div class="product-content">
            <div class="text-prod">
              <h2>${productscart[j].title}</h2>
              <h5><mark>${productscart[j].price} $</mark></h5>
            </div>
            <div class="ic-shop">
              <i class="fa-solid fa-cart-plus "></i>
              <i class="fa-regular fa-heart "></i>
            </div>
          </div>
        </div>`;
  productsGroub.insertAdjacentHTML("beforeend", element);
}
/*==================================
  10} list suits Products
==================================*/
// getelements
let ProductsSuit = document.querySelector(".suit-products"),
  suitsAll = ProductsSuit.querySelector(".all-suits");

for (let f = 0; f < suitsproducts.length; f++) {
  const element = `<div 
        class="suits-card">
          <img id="img-up" src="imag/${suitsproducts[f].image}.jfif" alt=""></img>
          <div class="product-content">
            <div class="text-prod">
              <h2>${suitsproducts[f].title} 🔥</h2>
              <h5><mark>${suitsproducts[f].price} $</mark></h5>
            </div>
            <div class="ic-shop">
              <i onclick="addCart()" id="btn-cart" class="fa-solid fa-cart-plus shop-suit"></i>
              <i onclick="addFavorit()" id="btn-favorit" class="fa-regular fa-heart "></i>
            </div>
          </div>
        </div>`;
  suitsAll.insertAdjacentHTML("beforeend", element);
}
/*==================================
  11} button scroll
==================================*/
let scrollBtn = document.querySelector(".Scroll-btn");

window.onscroll = () => {
  if (window.scrollY >= 400) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
