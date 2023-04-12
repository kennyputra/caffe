// toggle class active//
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamberger menu di klik//
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');

};

// klik di luar sidebar untuk menghilangkan bav//
const hamberger = document.querySelector('#amburger-menu')

document.addEventListener('click', function(e){
    if(!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

