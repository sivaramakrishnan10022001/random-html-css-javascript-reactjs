// Selecting elements
const slidingCards = document.querySelectorAll(".sliding-card");
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

//Variables
const loopTiming = 4000;
const isRunning = true;
let slideInterval;

// Next Card
const nextCard = () => {
    const currentCard = document.querySelector(".current");
    const beforeCurrentCard = document.querySelector(".before-current");
    const afterCurrentCard = document.querySelector(".after-current");
    const firstCard = document.querySelector(".first-card");
    const lastCard = document.querySelector(".last-card");

    //Removing classes
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");
    firstCard.classList.remove("first-card");
    lastCard.classList.remove("last-card");

    // Adding classes
    currentCard.classList.add("after-current");
    afterCurrentCard.classList.add("last-card");
    lastCard.classList.add("first-card");
    firstCard.classList.add("before-current");
    beforeCurrentCard.classList.add("current");

    return;
};

// Prev Card

const prevCard = () => {
    const currentCard = document.querySelector(".current");
    const beforeCurrentCard = document.querySelector(".before-current");
    const afterCurrentCard = document.querySelector(".after-current");
    const firstCard = document.querySelector(".first-card");
    const lastCard = document.querySelector(".last-card");

    //Removing classes
    currentCard.classList.remove("current");
    beforeCurrentCard.classList.remove("before-current");
    afterCurrentCard.classList.remove("after-current");
    firstCard.classList.remove("first-card");
    lastCard.classList.remove("last-card");

    // Adding classes
    currentCard.classList.add("before-current");
    afterCurrentCard.classList.add("current");
    lastCard.classList.add("after-current");
    firstCard.classList.add("last-card");
    beforeCurrentCard.classList.add("first-card");
};

//EventListeners
nextButton.addEventListener("click", () => {
    nextCard();
    if (isRunning) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextCard, loopTiming);
    }
    nextButton.disabled = true;
    setTimeout(() => {
        nextButton.disabled = false;
    }, 400);
});

prevButton.addEventListener("click", () => {
    prevCard();
    if (isRunning) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextCard, loopTiming);
    }
    prevButton.disabled = true;
    setTimeout(() => {
        prevButton.disabled = false;
    }, 400);
});

// Run slideloop
if (isRunning) {
    slideInterval = setInterval(nextCard, loopTiming);
}
