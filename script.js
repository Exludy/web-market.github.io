document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (e) {
        if (!dropbtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove("show");
        }
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function moveSlide(direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentSlide);
    });

    function filterByMemory(memory) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            const memoryText = slide.querySelector('.stereo-info p').textContent.trim();
            if (memory === 'all' || memoryText.includes(memory)) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    const memoryButtons = document.querySelectorAll('.memory-filter-btn');
    memoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const memory = this.dataset.memory;
            filterByMemory(memory);
        });
    });

    filterByMemory('all');
});
