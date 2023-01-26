const leftArrow = document.getElementById("arrow-l-icon");
const rightArrow = document.getElementById("arrow-r-icon");
const galleryContainer = document.getElementById("modal-gallery");
let intervalId;

leftArrow.addEventListener("mouseover", (event) => {
    intervalId = setInterval(() => {
        galleryContainer.scrollBy(-10, 0);
    }, 50);
}, false);

leftArrow.addEventListener("mouseout", (event) => {
    clearInterval(intervalId);
}, false);

rightArrow.addEventListener("mouseover", (event) => {
    intervalId = setInterval(() => {
        galleryContainer.scrollBy(10, 0);
    }, 50);
}, false);

rightArrow.addEventListener("mouseout", (event) => {
    clearInterval(intervalId);
}, false);