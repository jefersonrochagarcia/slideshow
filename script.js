

let slide = document.querySelectorAll(".slide");
let slidePhoto = document.getElementById("slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let currentSlide = 0;
const images = ["637789.jpg",
    "905292.png",
    "1337240.png"];

function updateSlide() {
    slide.forEach((s, index) => {
        s.classList.toggle("hidden", index !== currentSlide);
    });
}

prev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slide.length) % slide.length;
    updateSlide();
});
next.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slide.length;
    updateSlide();
});
updateSlide();