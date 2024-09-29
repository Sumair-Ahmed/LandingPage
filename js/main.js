const slider = document.querySelector('.testimonial-slider');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentSlide = 0;

nextButton.addEventListener('click', () => {
    const maxSlide = slider.children.length / 2;
    currentSlide = (currentSlide + 1) % maxSlide;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    const maxSlide = slider.children.length / 2;
    currentSlide = (currentSlide - 1 + maxSlide) % maxSlide;
    updateSlider();
});

function updateSlider() {
    const offset = currentSlide * -50; // Move by 50% for 2 items
    slider.style.transform = `translateX(${offset}%)`;
}