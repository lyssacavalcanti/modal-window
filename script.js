'use sctrict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function() {
    console.log('Button clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden');
};
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
    btnsCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(event) {
    // console.log('A key was pressed')
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});