'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */


const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}

document.getElementById('iqbtn').onclick = function() {
  window.location.href = 'https://t.me/zeldaminesofficial';
};


document.getElementById('ytbutton').onclick = function() {
  window.location.href = 'https://youtube.com/@zeldaminesofficial';
};

document.getElementById('off-button').onclick = function() {
  window.location.href = '#tournament';
};

document.getElementById('ux').onclick = function() {
  window.location.href = 'https://maizenux.github.io';
};





// Get the login button element
const loginButton = document.getElementById('lgn');

// Add an event listener to the button
loginButton.addEventListener('click', () => {
  // Navigate to login.html when the button is clicked
  window.location.href = 'login.html';
});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})