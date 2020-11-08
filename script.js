const slideLeftButton = document.querySelector('.slide-left');
const slideRightButton = document.querySelector('.slide-right');
const currentSlide = document.querySelector('.current-slide');
const slides = document.querySelectorAll('.slides__item');

let countTranslate = 0;
let currentPage = 1;

slideRightButton.addEventListener('click', () => {
    if (countTranslate > -814) {
        countTranslate -= 407;
        currentPage++;
        currentSlide.textContent = currentPage;
        slides.forEach(slide => {
            slide.style.transform = 'translateX(' + (countTranslate) + 'px)';
        });
    }

    if (currentPage !== 1) {
        slideLeftButton.classList.remove('disabled');
    }

    if (currentPage === 3) {
        slideRightButton.classList.add('disabled');
    }
});

slideLeftButton.addEventListener('click', () => {
    if (countTranslate < 0) {
        countTranslate += 407;
        currentPage--;
        currentSlide.textContent = currentPage;
        slides.forEach(slide => {
            slide.style.transform = 'translateX(' + (countTranslate) + 'px)';
        });
    }

    if (currentPage !== 3) {
        slideRightButton.classList.remove('disabled');
    }

    if (currentPage === 1) {
        slideLeftButton.classList.add('disabled');
    }
});