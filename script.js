const images = document.querySelectorAll('.container img');
const progress = document.querySelector('.progress_bar');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let timeLimit = 5000;
let index = 0;

let updateSlide = () => {
    progress.style.transition = 'none'; 
    progress.style.width = '0%'; 

    setTimeout(() => {
        progress.style.transition = `width ${timeLimit / 1000}s linear`; 
        progress.style.width = '70%'; 
    }, 50);

    images.forEach(img => {
        img.style.transform = `translateX(${-index * 100}%)`;
    });
}

let slideTransition = (direction) => {
    clearInterval(interval);
    
    if (direction === 'right') {
        index = (index + 1) % images.length; 
    } else if (direction === 'left') {
        index = (index - 1 + images.length) % images.length; 
    }

    updateSlide();
    interval = setInterval(() => {
        index = (index + 1) % images.length; 
        updateSlide();
    }, timeLimit);
}

let interval = setInterval(() => {
    index = (index + 1) % images.length; 
    updateSlide();
}, timeLimit);

rightButton.addEventListener('click', () => {
    slideTransition('right'); 
});

leftButton.addEventListener('click', () => {
    slideTransition('left'); 
});

progress.style.transition = 'width 5s linear';
progress.style.width = '70%';