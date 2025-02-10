let currentIndex = 0;
const slides = document.querySelector(".carousel-slide");
const totalSlides = document.querySelectorAll(".carousel-slide img").length;

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlide();
}

function updateSlide() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(() => moveSlide(1), 1000); // Auto-slide every seconds
