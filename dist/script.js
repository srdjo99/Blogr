const btnNav = document.querySelector(".menu-icon");
const btnClose = document.querySelector(".close-icon");
const header = document.querySelector(".header");

const btnConn = document.querySelector(".conn");
const conLi = document.querySelector(".con-li");

const btnProd = document.querySelector(".prod");
const prodLi = document.querySelector(".prod-li");

const btnCom = document.querySelector(".com");
const comLi = document.querySelector(".com-li");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

btnClose.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

btnConn.addEventListener("click", function () {
  conLi.classList.toggle("dd-active");
  prodLi.classList.remove("dd-active");
  comLi.classList.remove("dd-active");
});

btnProd.addEventListener("click", function () {
  prodLi.classList.toggle("dd-active");
  conLi.classList.remove("dd-active");
  comLi.classList.remove("dd-active");
});

btnCom.addEventListener("click", function () {
  comLi.classList.toggle("dd-active");
  prodLi.classList.remove("dd-active");
  conLi.classList.remove("dd-active");
});
