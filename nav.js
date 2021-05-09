const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#navUL');

hamburger.addEventListener('click', () => {
    var navUL = document.querySelector('.navUL');
    navUL.classList.toggle('active');
})