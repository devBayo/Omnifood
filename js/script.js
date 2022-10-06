'use strict'

// Targeting Elements

// Sticky Nav
let nav = document.querySelector("header .main-nav")
let navButton = document.querySelector("header .btn-mobile-nav") 

navButton.addEventListener("click", () => {
    nav.classList.toggle("active")
    navButton.classList.toggle("active")
})

// Intersection Observer
