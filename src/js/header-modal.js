const openModalBtn = document.querySelector('.open-modal-btn')
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal-content');
const body = document.querySelector('body');
openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    backdrop.classList.remove('is-hidden');
    modal.classList.add('is-open');
    body.classList.add('modal-is-open');
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo(0, scrollPosition);
})


// closeModalBtn.addEventListener()