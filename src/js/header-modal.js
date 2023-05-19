const openModalBtn = document.querySelector('.open-modal-btn')
const modal = document.querySelector('.popup');
const body = document.querySelector('body');

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('target');
    body.classList.add('modal-is-open');
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo(0, scrollPosition);
})


// closeModalBtn.addEventListener()