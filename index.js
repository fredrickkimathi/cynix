// Array of objects containing the texts and the active dot index
const contentArray = [
    { text: 'You get back more <br>than services.<br>but also <span class="tech">technology.</span>', activeDot: 0 },
    { text: 'Experience the future<br>with our innovative<br>and tech <span class="tech">solutions.</span>', activeDot: 1 },
    { text: 'Connecting you to<br>Advanced <br>better <span class="tech">possibilities.</span>', activeDot: 2 }
];

// Index to keep track of the current content
let currentIndex = 0;

function updateContent() {
    const dynamicText = document.getElementById('dynamicText');
    const loadingDots = document.getElementById('loadingDots').children;

    // Update the text
    dynamicText.innerHTML = contentArray[currentIndex].text;

    // Update the loading dots
    for (let i = 0; i < loadingDots.length; i++) {
        if (i === contentArray[currentIndex].activeDot) {
            loadingDots[i].classList.add('active');
        } else {
            loadingDots[i].classList.remove('active');
        }
    }

    // Update the index
    currentIndex = (currentIndex + 1) % contentArray.length;
}

// Change content every 7 seconds
setInterval(updateContent, 7000);

// Initial content load
updateContent();

//pro button to be focus

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('proButton').focus();
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".chevron-up").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelector('.top-bar1');
    const sect2 = document.querySelector('#sect-2a');
    const sect2Top = sect2.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= sect2Top) {
            navBar.style.backgroundColor =  'rgb(51, 50, 63)';
        } else {
            navBar.style.backgroundColor = ''; // Reset to original color
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const basicButton = document.getElementById('basicButton');
    const proButton = document.getElementById('proButton');

    // Initially set "Pro" button as active
    proButton.classList.add('active');

    // Add event listener to the "Basic" button
    basicButton.addEventListener('click', function() {
        // Remove active class from "Pro" button
        proButton.classList.remove('active');
        // Add active class to "Basic" button
        basicButton.classList.add('active');
    });

    // Add event listener to the "Pro" button
    proButton.addEventListener('click', function() {
        // Add active class to "Pro" button
        proButton.classList.add('active');
        // Remove active class from "Basic" button
        basicButton.classList.remove('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const humButton = document.querySelector('.hum');
    const mobileView = document.querySelector('.mobile-nav');

    humButton.addEventListener('click', function() {
        mobileView.classList.toggle('open'); // Toggle the 'open' class
        console.log('hello');
    });
});




