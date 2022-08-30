const button_primary = document.querySelector('#button1');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__content--close');

const menu_hamburger = document.querySelector('.hamburger_menu');
const menu__content  = document.querySelector('.mobile-menu__content');

button_primary.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
})

closeButton.addEventListener('click', () =>{
    modal.classList.add('hidden');
    modal.classList.remove('visible');
})

menu_hamburger.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    menu__content.classList.toggle('hidden');
}