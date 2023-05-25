const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Création des flèches + test 
const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", function() {
	console.log("Le clic de la flèche de gauche fonctionne");
});

const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", function(){
	console.log("Le clic de la flèche de droite fonctionne");
});


// Création des bullet points
const dotsSlides = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add("dot")
	dotsSlides.appendChild(dot);
}
let count = 0;

let dotSelected = document.querySelectorAll(".dot");
dotSelected[count].classList.add("dot_selected");

