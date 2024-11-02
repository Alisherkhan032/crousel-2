const images = document.querySelectorAll('.container img');
const progress = document.querySelector('.progress_bar');

let timeLimit = 5000;
let index = 0;

let nextSlide = () => {
    index = (index + 1) % images.length;

    images.forEach(img => {
        img.style.transform = `translateX(${-index * 100}%)`;
    });

    progress.style.transition = 'none'; 
    progress.style.width = '0%';

    progress.offsetHeight; 

    progress.style.transition = `width ${timeLimit / 1000}s linear`;
    progress.style.width = '70%';
}

setInterval(nextSlide, timeLimit);
