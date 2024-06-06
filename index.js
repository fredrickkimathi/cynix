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

// Change content every 5 seconds
setInterval(updateContent, 7000);

// Initial content load
updateContent();

//pro button to be focus

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('proButton').focus();
});
