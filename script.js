let currentIndex = 0;
const slidesToShow = 3; // Number of slides visible at once
const slideWidth = 132; // Width of each slide image
const slideMargin = 20; // Margin between slides

function showSlides() {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.slide').length;
    const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1; // Adjust for visible slides

    // Ensure the currentIndex wraps correctly
    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    // Adjust slide width and margin for responsive design
    const containerWidth = (slideWidth + slideMargin) * slidesToShow;
    sliderContainer.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
}

function nextSlide() {
    currentIndex++;
    showSlides();
}

function prevSlide() {
    currentIndex--;
    showSlides();
}

// Initially show the first set of slides
showSlides();

// Select all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add click event listener to each accordion button
accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');

    button.addEventListener('click', () => {
        // Toggle 'active' class on clicked item
        item.classList.toggle('active');

        // Toggle '+' and '-' icon
        const icon = item.querySelector('.icon');
        if (item.classList.contains('active')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }

        // Close other accordion items
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.icon').textContent = '+';
            }
        });
    });
});
