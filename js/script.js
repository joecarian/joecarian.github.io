function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.remove('hidden');
        }
    });

    const arrows = document.querySelector('.arrows');
    const scrollY = window.scrollY;
    const maxScrollY = document.body.scrollHeight - window.innerHeight;
  
    if (scrollY >= maxScrollY) {
      arrows.style.display = 'none';
    }
}

function togglerButtonOnClick () {
    const navBar = document.getElementById('navbarNav');
    if (navBar.classList.contains('show')){
        navBar.classList.remove('show');
    }
    else {
        navBar.classList.add('show');
    }
}

window.addEventListener('scroll', handleScrollAnimation);
document.getElementById('toggler').addEventListener('click', togglerButtonOnClick);
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', togglerButtonOnClick);
});
handleScrollAnimation();

