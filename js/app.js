/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById("navbar__list");
const containerCount = document.getElementsByClassName("landing__container").length;

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

for (let i = 0; i < containerCount; i++) {

    const target = document.querySelectorAll("section")[i];
    const listName = target.dataset.nav;
    const newList = document.createElement("li");
    const listText = document.createTextNode(listName);
    const listItem = "sample-nav-" + i;
    newList.setAttribute("id", listItem); //set new #id
    newList.setAttribute("class", "menu__link"); //set new .class
    newList.appendChild(listText);
    navbarList.appendChild(newList);


// Scroll to anchor ID using scrollTO event

    const clickFrom = document.getElementById(listItem); //get #id from each navbar list
    clickFrom.addEventListener( 'click', function () {
        target.scrollIntoView ({ //scroll to target = each section
            behavior: 'smooth',
            block: 'start'
        })
    })
}

 // Add class 'active' to section when near top of viewport

 // [QUESTION to mentors] How can I move active class (highlight) to next section. I am guessing For Loop should be applied but I couldn't find a good solution.

//for (let j = 1; j < containerCount; i++) {

    const sectionPosition = document.getElementById("section1"); // "section" + J???
    const distance = sectionPosition.getBoundingClientRect();
    window.onscroll = function() {myFunction()};

    function myFunction() {

        if (document.body.scrollTop > distance.top || document.documentElement.scrollTop > distance.top) {
            sectionPosition.className = "your-active-class";
        } else {  // Should I add additional else if? but I don't know what to add.
            sectionPosition.className = "";
        }
    }
// }


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


