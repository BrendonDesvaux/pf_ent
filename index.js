const compagny = document.getElementById("compagny");
const fondator = document.getElementById("fondator");

const compagnyBloc = document.querySelector('.compagny');
const fondatorBloc = document.querySelector(".fondator");
compagny.addEventListener("click", () => {
    compagnyBloc.style.display = "flex";
    fondatorBloc.style.display = "none";
    compagny.style.textDecoration = "underline";
    fondator.style.textDecoration = "none";
});

fondator.addEventListener("click", () => {
    compagnyBloc.style.display = "none";
    fondatorBloc.style.display = "flex";
    compagny.style.textDecoration = "none";
    fondator.style.textDecoration = "underline";

});

function scrollToAnchor(event, anchorName) {
    event.preventDefault();
    const anchorElement = document.querySelector('#' + anchorName);
    if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const boxes = document.querySelectorAll('.box');

// Initialiser Tippy.js sur chaque élément sélectionné
boxes.forEach(box => {
    tippy(box, {
        allowHTML: true,
        trigger: 'click',
    });
});

// Vérifier si l'utilisateur a défilé la page
window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolling', window.scrollY > 0);
});


// Faire défiler la page en haut lorsque le bouton est cliqué
document.querySelector('.scroll-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});