const btnNavEl = document.querySelector(".btn-nav-mobile");
console.log(btnNavEl)
const headerEl = document.querySelector(".header");
const btnCloseContact = document.querySelector(".close-contact-btn");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle('nav-open');
});

const btnContactEl= document.querySelector(".contact-btn");

const contactEl = document.querySelector(".contact");

btnContactEl.addEventListener("click", function () {
    contactEl.classList.toggle("contact-open");
});

btnCloseContact.addEventListener("click" , function (){
    contactEl.classList.remove("contact-open");
})

