const colorsCard = {
    0: '#009688',
    1: '#FF3E7F',
    2: '#FF3E7F',
    3: '#03A9F4',
    4: '#03A9F4'
}


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

const projectCards = document.querySelectorAll('.card');
projectCards.forEach((cardHidden, index) => {
    cardHidden.style.setProperty('color', colorsCard[index]);
});
const anchors = document.querySelectorAll('.content > a');
anchors.forEach((anchor, index) => {
    anchor.style.setProperty('background-color', colorsCard[index]);
    anchor.addEventListener('mouseover', hoverCardAnchor);
    anchor.addEventListener('mouseout', () => {
        anchor.style.setProperty('background-color', colorsCard[index]);
        anchor.style.setProperty('color', 'white');
        anchor.style.removeProperty('opacity');
    });
});

function resetAnchor() {
    this.style.setProperty('background-color', colorsCard[index]);    
}

function hoverCardAnchor() {
    this.style.setProperty('opacity', 0.8);
    this.style.setProperty('background-color', '#000000');
    this.style.setProperty('color', 'aqua');
}

handleScrollAnimation();

