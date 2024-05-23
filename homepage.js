//Navbar
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//Add click event
menuBtn.addEventListener('click',() => {
    //Toggle menu open class
    menu.classList.toggle('menu-open');
});

//Stats Counter
const stats =document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;