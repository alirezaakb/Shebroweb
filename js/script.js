const btnNavEl = document.querySelector(".btn-nav-mobile");
console.log(btnNavEl)
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle('nav-open');
});