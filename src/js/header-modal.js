const openModalBtn = document.querySelector('.open-modal-btn');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal-content');
const body = document.querySelector('body');
const close = document.querySelector('.close-icon')
openModalBtn.addEventListener('click', e => {
  e.preventDefault();
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  window.scrollTo(0, scrollPosition);
  backdrop.classList.remove('is-hidden');
  modal.classList.add('is-open');
  body.classList.add('modal-is-open');
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEscape);
});

function closeModalOnEscape(e) {
  if (e.code === 'Escape') {
    backdrop.classList.add('is-hidden');
    modal.classList.remove('is-open');
    body.classList.remove('modal-is-open');
    backdrop.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', closeModalOnEscape);
  } 
}
function closeModal(e) {
  console.log(e.target);
  if (e.target === backdrop) {
    backdrop.classList.add('is-hidden');
    modal.classList.remove('is-open');
    body.classList.remove('modal-is-open');
    backdrop.removeEventListener('click', closeModal);
  } else if (e.target === close) {
    backdrop.classList.add('is-hidden');
    modal.classList.remove('is-open');
    body.classList.remove('modal-is-open');
    backdrop.removeEventListener('click', closeModal);
  }
}

// closeModalBtn.addEventListener()
