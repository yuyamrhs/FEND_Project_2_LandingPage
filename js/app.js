/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById("navbar__list");
const containerCount = document.getElementsByClassName("landing__container").length;

/**
 * End Global Variables
 * Begin Events
*/

// Build the navigation menu

for (let i = 0; i < containerCount; i++) {

    const target = document.querySelectorAll("section")[i];
    const listName = target.dataset.nav;
    const newList = document.createElement("li");
    const listText = document.createTextNode(listName);
    const listItem = "sample-nav-" + i;
    newList.setAttribute("id", listItem); //set new #id
    newList.setAttribute("class", "menu__link"); //set new .class
    newList.appendChild(listText); //add ID to new li lement
    navbarList.appendChild(newList); //add Class to new li lement

// Scroll to section on link click

    const clickFrom = document.getElementById(listItem); //get #id from each navbar list
    clickFrom.addEventListener( 'click', function () {
        target.scrollIntoView ({ //scroll to target(each section) smoothly 
            behavior: 'smooth',
            block: 'start'
        })
    })
}

 // Add class 'active' to section when near top of viewport

 window.addEventListener('scroll', myFunction); // highlight section in viewport to yellow

 function myFunction() { // function to add/remove active class iterately
     const allSections = document.querySelectorAll('section');
     for (i = 0; i < allSections.length; i++) {
         if(!isInViewport(allSections[i])){
             allSections[i].classList.remove('active');
         } else {
             allSections[i].classList.add('active');
         }
     }
 }
 
 function isInViewport(elem) { // function to define the sections' position in viewport
     let bounding = elem.getBoundingClientRect();
     return (
         bounding.top + 300 >= 0 &&
         bounding.left >= 0 &&
         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 300 &&
         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
     );
 }
 
