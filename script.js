//navbar
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        document.querySelector('.nav-links').classList.remove('open');
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//slides botao
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Automação de slides
setInterval(() => {
    changeSlide(1);
}, 3000); // Alterar slide a cada 3 segundos

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        if (window.innerWidth >= 1000) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -10; // Invertendo e reduzindo o movimento
            const rotateY = ((x / rect.width) - 0.5) * 10; // Invertendo e reduzindo o movimento

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1000) {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
    });
});
