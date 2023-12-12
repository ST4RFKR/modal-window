'use strict';
const modalWindow = document.querySelector('.modal-window');
const modalBtns = document.querySelectorAll('.show-modal-window');
const closeModalBtn = document.querySelector('.close-modal-window');
const overlay = document.querySelector('.overlay');

const showModalWindow = function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < modalBtns.length; i++){
        modalBtns[i].addEventListener('click', showModalWindow)
}

closeModalBtn.addEventListener('click', closeModal)

overlay.addEventListener('click', (e) => {
if (e.target !== modalWindow){
    closeModal();
    } 
})
document.addEventListener('keydown', (e) => {
    if (e.key == "Escape" && !modalWindow.classList.contains('hidden')) {
            closeModal();
    } 
})