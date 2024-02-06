'use strict';
const show_modal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')

const openModal = ()=>{
  btnOpenModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = ()=>{
  btnOpenModal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for(let i=0; i < show_modal.length; i++){
  show_modal[i].addEventListener('click', openModal);
}

document.addEventListener('keydown', closeModal);
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);



