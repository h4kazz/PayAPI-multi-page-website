// Header Menu Start

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

//  Header Menu End