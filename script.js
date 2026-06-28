// Dynamic Looping Typewriter Effect
const phrases = [
    "Final-Year Computer Science Scholar",
    "Mechanical, Electrical & Computer Engineer",
    "Web Developer & Problem Solver",
    "Where hardware architecture meets modern software solutions.",
    "Turning complex challenges into clean, efficient code."
];

const typewriterElement = document.getElementById("typewriter");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriterLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Text ko mita raha hay (Backspace)
        typewriterElement.innerHTML = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Text ko write kar raha hay
        typewriterElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Default speed for typing and deleting
    let typeSpeed = isDeleting ? 30 : 50; 

    // Agar poora word type ho jaye
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Word khatam hone par 2.5 second rukega
        isDeleting = true; // Agli dafa delete hona shuru hoga
    }
    // Agar poora word delete ho jaye
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Agle text par move karega
        typeSpeed = 400; // Naya word shuru hone se pehle aadha second ka pause
    }

    setTimeout(typeWriterLoop, typeSpeed);
}

// Page load hote hi animation start ho jaye
window.onload = typeWriterLoop;

// Scroll Reveal Effect
window.addEventListener('scroll', function() {
    var reveals = document.querySelectorAll('.scroll-reveal');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // kitna upar aane par animate ho

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
});