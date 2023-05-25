// Tableau contenant les images et descriptifs 
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
// Déclaration des variables 
let count = 0;

//Eléments HTML modifiés 
const bannerSlides = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");

// Flèches 
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Bullets points
const dotsSlides = document.querySelector(".dots");

// Création des flèches + test étape 2
arrowLeft.addEventListener("click", function() {
	console.log("Le clic de la flèche de gauche fonctionne");
});

arrowRight.addEventListener("click", function(){
	console.log("Le clic de la flèche de droite fonctionne");
});


// Création des bullet points étape 3
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add("dot")
	dotsSlides.appendChild(dot);
}

let dotSelected = document.querySelectorAll(".dot");
dotSelected[count].classList.add("dot_selected");

/**  Création de la fonction pour ajouter toutes les images et descriptifs
du futur carrousel étape 4-5 **/
// Création du carrousel 

function showSlide() {
	bannerSlides.src = `./assets/images/slideshow/${slides[count].image}`;
	bannerTagLine.innerHTML = slides[count].tagLine;
}
	
// Création de la navigation avec les flèches
// Flèche de gauche
function previousSlide() {
	dotSelected[count].classList.remove(".dot_selected");
	if (count <= 0) {
		count = slides.length - 1;
	} 
	else {
		count--;		
	}	
	dotSelected[count].classList.add("dot_selected");
	showSlide()
}

//Flèche de droite
function nextSlide() {
	dotSelected[count].classList.remove(".dot_selected");
	if (count >= slides.length - 1) {
		count = 0;
	} 
	else {
		count++;		
	}	
	dotSelected[count].classList.add("dot_selected");
	showSlide()
}
