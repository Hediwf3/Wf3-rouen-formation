/* ------------------- --------------------------- ---------------------------
|                                                                             |
|                        LA MANIPULATION DES CONTENUS                         |
-----------------------------------------------------------------------------*/


function l(e){
    console.log(e)
}


// Je souhaite recuperer mon lien google 

var google = document.getElementById("google");

l(google);

// maintenant je souhaite acceder aux infos de ce lien par exemple 


l("le liens vers lequel pointe la balise :"); 
l(google.href);


// id de la balise 
l("l id de la balise");
l(google.id);

// class de la balise 
l("Class de la balise");
l(google.className);


// connaitre le texte de la balise 
l("Le texte de la balise");
l(google.textContent);

// si je souhaite modifier le contenue de mon lien 
// Comme une variable classique  je vais simplement venir affecter une nouvelle valeur

google.textContent = "Mon lien vers Google !";

/* ------------------- --------------------------- ---------------------------
|                        Ajouter un element dans ma page                      |
-----------------------------------------------------------------------------*/


//  - Nous allons utilise deux methode 

// 1 la focntion doucument.createElement() va permettre de genere un nouvelle element dans le dom que je pourrais par la suite modifier avec 
// le methodes que nous venons de voir 

// -- PS Ce nouvel elements est placé en memoire 


//- DEfinitipon de l'element 


var span = document.createElement('span');

// si je souhaite lui donner un ID 

span.id = "Mon span"; 

// si je souhaite lui attribuer du contenu

span.textContent = "Mon Beau text en JS"; 

// la fonction appendChild() va permettre de rajouter un enfant a un element du DOM 

google.appendChild(span); 


/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */





var lien = document.createElement('a');

var titre = document.createElement('h1');

lien.href = "http://google.fr";

lien.textContent = "Mon titre"; 

titre.appendChild(lien); 

document.body.appendChild(titre);

lien.style.color = "red";

lien.style.textDecoration = "none"; 







