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

 function checkView () {
    let isInViewport = function (elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const features = document.querySelectorAll('section')[0];
    window.addEventListener('scroll', function (event) {
        if (isInViewport(features)) {
            features.classList.add("active");
        } else {
            features.classList.remove("active");
        }
    }, false);
}

checkView();


 // [QUESTION to mentors] How can I move active class (highlight) to next section. I am guessing For Loop should be applied but I couldn't find a good solution.

 
/*  
    const sectionPosition = document.getElementById("section1"); 
    const distance = sectionPosition.getBoundingClientRect();
    window.onscroll = function() {myFunction()};

    function myFunction() {

        if (document.body.scrollTop + 100 > distance.top || document.documentElement.scrollTop + 100 > distance.top) {
            sectionPosition.className = "your-active-class";
        } else {  
            sectionPosition.className = "";
        }
    }
*/

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


