// KEEP!!!

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

//

function firstFunction() {
    const elems = document.querySelectorAll("section");
    //const eachTop = [];
    for (let j = 0; j < elems.length; j++) {
        let distance = elems[j].getBoundingClientRect();
        distance.top;
    //    eachTop.push(distance.top);
    }
}

window.onscroll = function() {myFunction()};

    function myFunction() {
        firstFunction() {
            if (document.body.scrollTop > eachTop[0] || document.documentElement.scrollTop > eachTop[0] ) {
                elems.className = "your-active-class";
            } else { 
                elems.className = "";
            }
        }    
    }


const elems = document.querySelectorAll("section");
const eachTop = [];
for (let j = 0; j < elems.length; j++) {
    let distance = elems[j].getBoundingClientRect();
    eachTop.push(distance.top);
 
    window.onscroll = function() {myFunction()};

    function myFunction() {

        if (document.body.scrollTop > eachTop[0] || document.documentElement.scrollTop > eachTop[0] ) {
            elems.className = "your-active-class";
        } else { 
            elems.className = "";
        }
    }

}




let distance = "";

const idName = "section" + 1
const section = document.getElementById(idName);
const distance = section.getBoundingClientRect();

const firstFunction = function() {
    for (let j = 1; j < 5; j++) {
        const idName = "section" + j;
        const section = document.getElementById(idName);
        section.getBoundingClientRect();
    }
}

console.log(distance);


const allSections = document.getElementsByTagName('section'); 
const distance = allSections.getBoundingClientRect();

    window.onscroll = function() {myFunction()};

    function myFunction() {

        if (document.body.scrollTop > distance.top || document.documentElement.scrollTop > distance.top ) {
            allSections.classList.add("your-active-class");
        } else { 
            allSections.classList.remove("your-active-class");
        }
    }






const allSections = document.getElementsByTagName('section'); 

for (j = 0; j < 4; j++) {
    const distance = allSections[j].getBoundingClientRect();
    const test = allSections[j];
    test.className = "";

    window.onscroll = function() {myFunction()};
  
    function myFunction() {

        if (document.body.scrollTop + 100 > distance.top || document.documentElement.scrollTop + 100 > distance.top ) {
            test.className = "your-active-class";
        } else { 
            test.className = "";
        }
    }
}



const allSections = document.getElementsByTagName('section'); 

for (let section of allSections) {
const distance = section.getBoundingClientRect();

    window.onscroll = function() {myFunction()};

    function myFunction() {

        if (document.body.scrollTop +100 > distance.top || document.documentElement.scrollTop + 100 > distance.top ) {
            section.className = "your-active-class";
        } else { 
            section.className = "";
        }
    }
}


// OLD
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