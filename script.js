const images = document.querySelectorAll('.container img');
const progress = document.querySelector('.progress_bar');

let timeLimit = 5000;
let index = 0;

let nextSlide = () => {
    index = (index + 1) % images.length;

    progress.style.transition = 'none'; 
    progress.style.width = '0%'; // Set width to 0%

    // Use setTimeout to delay the transition
    setTimeout(() => {
        progress.style.transition = `width ${timeLimit / 1000}s linear`; // Set transition for width
        progress.style.width = '70%'; // Set width to 70%
    }, 50);

    images.forEach(img => {
        img.style.transform = `translateX(${-index * 100}%)`;
    });
}

setInterval(nextSlide, timeLimit);

// Start the progress bar for the first slide
progress.style.transition = 'width 5s linear';
progress.style.width = '70%';
