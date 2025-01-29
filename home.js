document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-arrow.right");
    const prevButton = document.querySelector(".carousel-arrow.left");
    const indicators = document.querySelectorAll(".carousel-indicator");
    let currentIndex = 0;

    const updateActiveSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    };

    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateActiveSlide(index);
    };

    nextButton.addEventListener("click", () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    });

    prevButton.addEventListener("click", () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(prevIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => moveToSlide(index));
    });

    // Autoplay feature
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    }, 5000); // Adjust the interval as needed

    // Initialize the first slide as active
    updateActiveSlide(0);
});
