var openModalBtn = document.getElementById('openModalBtn');
var modalMenu = document.getElementById('modalMenu');

openModalBtn.addEventListener('click', function() {
  modalMenu.style.display = 'block';
});

document.addEventListener('click', function(event) {
  if (!modalMenu.contains(event.target) && event.target !== openModalBtn) {
    modalMenu.style.display = 'none';
  }
});

