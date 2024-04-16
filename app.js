let sidebar = document.querySelector('.side');
let menu = document.querySelector('#menu');
let cross = document.querySelector('#cross');

menu.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
cross.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
