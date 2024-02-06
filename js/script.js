const navbar = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
        navbar.classList.add('nav-color-white');
    } else {
        navbar.classList.replace('nav-color', 'bg-transparent');
        navbar.classList.remove('nav-color-white');
    }
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'dropdown-menu');
        navbar.classList.add('nav-color-white');
    } else {
        navbar.classList.replace('dropdown-menu', 'bg-transparent');
        navbar.classList.remove('nav-color-white');
    }
});
