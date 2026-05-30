// ===== SLIDER =====
const slideImg = document.getElementById("slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let imagens = [
    "img/img1.jfif",
    "img/img2.jfif",
    "img/img3.jfif"
];

let i = 0;
const dots = document.querySelectorAll(".dot");

function mostrarImagem(n) {
    i = (n + imagens.length) % imagens.length;
    if (slideImg) slideImg.src = imagens[i];
    dots.forEach(d => d.classList.remove("ativo"));
    if (dots[i]) dots[i].classList.add("ativo");
}

if (prevBtn) {
    prevBtn.addEventListener("click", function() {
        mostrarImagem(i - 1);
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", function() {
        mostrarImagem(i + 1);
    });
}

if (slideImg) {
    setInterval(function() {
        mostrarImagem(i + 1);
    }, 3000);
}

// ===== HAMBÚRGUER =====
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('aberto');
    });
}