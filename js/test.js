// this .js file is for notes and testing codes. It won't be linked to index.html

const sectionPosition = document.getElementById("section1");
const distance = sectionPosition.getBoundingClientRect();
window.onscroll = function() {myFunction()};

function myFunction() {

    if (
        document.body.scrollTop > distance.top || document.documentElement.scrollTop > distance.top)
    {
        sectionPosition.className = "your-active-class";
    } else {
        sectionPosition.className = "";
    }
}


// const target = document.querySelectorAll("section")[0];
// const distance = target.getBoundingClientRect();

//     if (
//         distance.top >= 0 &&
//         distance.left >= 0 &&
//         distance.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//         distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     ) {
//         target.classList.add("your-active-class");
//     } else {
//         target.classList.remove("your-active-class");
//     }



// const isInViewport = function (elem) {
//     const distance = elem.getBoundingClientRect();
//     return (
//         distance.top >= 0 &&
//         distance.left >= 0 &&
//         distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         distance.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

// const target = document.querySelectorAll('section')[0];
// if (isInViewport(target)) {
//     target.classList.add("your-active-class");
// } else {
//     target.classList.remove("your-active-class");
// }


// const target = document.querySelectorAll("section")[0];
// const distance = target.getBoundingClientRect();
// window.onscroll = function() {myFunction()};

// function myFunction() {

//     if (
//         distance.top >= 0 &&
//         distance.left >= 0 &&
//         distance.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//         distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     ) {
//         target.classList.add("your-active-class");
//     } else {
//         target.classList.remove("your-active-class");
//     }
// }


// const sectionPosition = document.getElementById("section1");
// const distance = sectionPosition.getBoundingClientRect();
// window.onscroll = function() {myFunction()};

// function myFunction() {

//     if (
//         distance.top >= 0 &&
//         distance.left >= 0 &&
//         distance.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//         distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     ) {
//         document.getElementById("section1").className = "your-active-class";
//     } else {
//         document.getElementById("section1").className = "";
//     }
// }

// const sectionPosition = document.getElementById("section1");
// const distance = sectionPosition.getBoundingClientRect();
// window.onscroll = function() {myFunction()};

// function myFunction() {

//     if (
//         document.body.scrollTop > distance.top || document.documentElement.scrollTop > distance.top)
//     {
//         sectionPosition.className = "your-active-class";
//     } else {
//         sectionPosition.className = "";
//     }
// }