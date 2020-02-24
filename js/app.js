/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navbarList = document.getElementById("navbar__list");
const containerCount = document.getElementsByClassName("landing__container").length;

for (let i = 0; i < containerCount; i++) {

    const el = document.querySelectorAll("section")[i];
    const listName = el.dataset.nav;
    const newList = document.createElement("li");
    const listText = document.createTextNode(listName);
    const listItem = "sample-nav-" + i;
    newList.setAttribute("id", listItem);
    newList.setAttribute("class", "nav-list-item");
    newList.appendChild(listText);
    navbarList.appendChild(newList);

}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


