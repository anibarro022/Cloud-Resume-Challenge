const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

// counter

const counter = document.querySelector('.counter-number');
async function updateCounter() {
    let response = await fetch("https://x7kgwyqzzdje5obll3mkwypycq0yoylf.lambda-url.us-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();