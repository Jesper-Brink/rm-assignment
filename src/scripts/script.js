// Logo animation
document.addEventListener('scroll', function() {
    const targetElement = document.querySelector('.logo');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
        targetElement.classList.add('collapsed');
    } else {
        targetElement.classList.remove('collapsed');
    }
});