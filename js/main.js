const button_primary = document.querySelector('#button1');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__content--close');

button_primary.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
})

closeButton.addEventListener('click', () =>{
    modal.classList.add('hidden');
    modal.classList.remove('visible');
})