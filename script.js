let currentIndex = 0;

function showSlides() {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.slide').length;
    const maxIndex = Math.ceil(totalSlides / 5) - 1; // Since 5 images are shown at once

    // Ensure the currentIndex wraps correctly
    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    sliderContainer.style.transform = `translateX(-${currentIndex * (132 + 20) * 5}px)`; // Slide by 5 images (132px width + 20px margin)
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
