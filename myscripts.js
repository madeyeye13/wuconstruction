document.addEventListener('DOMContentLoaded', function() {
    const heroContents = document.querySelectorAll('.hero-content');
    let currentIndex = 0;

    function showNextContent() {
        heroContents[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % heroContents.length;
        heroContents[currentIndex].classList.add('active');
    }

    heroContents[currentIndex].classList.add('active');
    setInterval(showNextContent, 7000); // Change image and text every 5 seconds
});