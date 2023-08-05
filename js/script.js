// Funzione per controllare quando l'elemento entra nella visualizzazione
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Funzione per gestire l'animazione
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

// Aggiungi un evento di scroll per attivare l'animazione quando l'utente scorre verso la sezione
window.addEventListener('scroll', handleScrollAnimation);

// Esegui l'animazione una volta all'inizio, nel caso in cui l'elemento è già nella visualizzazione
handleScrollAnimation();

