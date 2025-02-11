document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    const totalSlides = images.length;

    // Set width dynamically based on number of images
    slides.style.width = `${totalSlides * 100}vw`;

    function moveSlide(step) {
        currentIndex += step;

        // Loop to the first image if at the end
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } 
        // Loop to the last image if at the beginning
        else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        updateSlide();
    }

    function updateSlide() {
        slides.style.transform = `translateX(${-currentIndex * 100}vw)`;
    }

    // Auto-slide every 3 seconds
    let autoSlide = setInterval(() => moveSlide(1), 3000);

    // Stop auto-slide when user interacts with buttons
    document.querySelector(".prev").addEventListener("click", function () {
        clearInterval(autoSlide);
        moveSlide(-1);
        autoSlide = setInterval(() => moveSlide(1), 3000);
    });

    document.querySelector(".next").addEventListener("click", function () {
        clearInterval(autoSlide);
        moveSlide(1);
        autoSlide = setInterval(() => moveSlide(1), 3000);
    });
});
