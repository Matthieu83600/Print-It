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
// Compteur
let count = 0;

//Eléments HTML modifiés 
const bannerSlides = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");

// Flèches 
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Bullets points
const dotsSlides = document.querySelector(".dots");

// Création des events listeners des flèches
 // Ajout de la fonction de défilement : étape 4
arrowLeft.addEventListener("click", previousSlide)
/***  Test de fonctionnement de la flèche : étape 2
	console.log("Le clic de la flèche de gauche fonctionne");
***/

// Ajout de la fonction de défilement : étape 4
arrowRight.addEventListener("click", nextSlide)

/*** Test de fonctionnement de la flèche : étape 2
	console.log("Le clic de la flèche de droite fonctionne");
***/

// Création des bullet points : étape 3
/**  Utilisation d'une boucle for pour compter le nombre d'images dans le tableau 
slide afin d'avoir le même nombre de points  
**/
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add("dot")
	dotsSlides.appendChild(dot);
}

/** Déclaration de la variable permettant de mettre en avant le point du slide
sélectionné
!! Problème : tous les points sont sélectionnés !! 
**/
let dotSelected = document.querySelectorAll(".dot");
// Résolution : attribution du point sélectionné à la première slide
dotSelected[count].classList.add("dot_selected");

/**  Création de la fonction pour ajouter toutes les images et descriptifs
du futur carrousel étape 4-5 **/
// Création du carrousel 
function showSlide() {
	bannerSlides.src = `./assets/images/slideshow/${slides[count].image}`;
	bannerTagLine.innerHTML = slides[count].tagLine;
}
	
// Création de la navigation avec les flèches
// Fonction flèche de gauche
function previousSlide() {
	// Suppression du point actuel sélectionné
	dotSelected[count].classList.remove("dot_selected");
	// Si compteur <= 0, alors on revient au dernier slide
	if (count <= 0) {
		count = slides.length - 1;
	} 
	// Sinon on décrément de 1 compteur
	else {
		count--;		
	}	
	// Ajout du point sélectionné à la nouvelle slide
	dotSelected[count].classList.add("dot_selected");
	// Appelle à la fonction qui affiche le slider 
	showSlide()
}

//Fonction flèche de droite
function nextSlide() {
	// Suppression du point sélectionné actuel
	dotSelected[count].classList.remove("dot_selected");
	// Si compteur >= à la longueur du tableau, alors on revient au premier slide
	if (count >= slides.length - 1) {
		count = 0;
	} 
	// Sinon on incrément de 1 compteur
	else {
		count++;		
	}	
	// Ajout du point sélectionné à la nouvelle slide 
	dotSelected[count].classList.add("dot_selected");
	// Appelle de la fonction qui affiche le slider
	showSlide()
}
