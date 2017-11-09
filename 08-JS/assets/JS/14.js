

/*------------------------------------- Les evenements ------------------------------------------------- */

/* Les evenements vont me permettre de declancher une fonction c'est a dire une series d'instruction, suite 
a une action de mon utilisateur, l'objectif c'est d'etre en mesure de capturer ces evenements afin d'executer une fonction */ 


/* les evenment MOUSE */ 

// click : au clic sur un element 

// mouseenter : passe au dessus de la zone qoccupe un element 

// mouseleave :  quand la souris sort de la zone


/* Les evenement liee au keyboard */ 

// keydown : quand une touche du clavier est enfoncée 

// keyup quand une touche est relachée 


/* Les evenement window */ 

// scroll : defillemtn de la fenetre 

// resize : redimenssionement de la fenetr

/* les evenement FORM */ 

// change : pour les elements input select et text area; 

// submit : qui se produit a l'envoie d'un formulaire 

/*  les evenements documents */ 


// DOMcontentLoaded : execute lorsque le document html est completement charger sans attendre le CSS et les images 



/*  - ---------------------------------------------------------------------------------------------------------*/ 



/* ------------------------------ Les ecouteurs d'evenements -------------------------------------------------- */ 



// Pour attacher un evenement a un element ou autrement dit pour declarer un ecouteur d'evenement qui se chargera de lancer une action;
// c'est a dire une fonction pour un evenement donee je vais utiliser la syntaxe suivante 

var p = document.getElementById("monparagraphe");

console.log(p);

function changeColorToRed() {

    p.style.color  = "red"; 


}

p.addEventListener('click', changeColorToRed);


/* exercice pratique */ 

// avec JS creer un champ "input" text avec un id unique affichez ensuite dans une alerte la saisie de l'utilisateur 


var input = document.createElement("input");

input.id = "input";

input.setAttribute("type", "text");

document.body.appendChild(input);



input.addEventListener('change', function(){

    alert(input.value)
});

