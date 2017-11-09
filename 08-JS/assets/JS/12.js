//*********************************************************** Les Dom ****************************************** */

/* Le DOM est une interface de devellopement en JS pour HTML. Grace au DOM je vais etre en mesure d'acceder / modifier mon html

                            L'objet "Document" c'est le point d'entrée vers mon contenu HTML ! 

                                Chaque page chargée dans  mon navigateur à un objet document 
                                
******************************************************************************************************************/



/* ------------------- document.getElementById -------------------------
|    document.getElementById est une fonction qui va permettre de      |
|  recuperer une lement HTML a partir de son identifiant unique son ID |
----------------------------------------------------------------------*/

let bonjour = document.getElementById("bonjour");
console.log(bonjour);


/* ------------------- document.getElementByClassName -------------------------
|    document.getElementByClassName est une fonction qui va permettre de       |
|       recuperer un ou plusieurs elements HTML a partir de sa class           |
------------------------------------------------------------------------------*/



var contenu = document.getElementsByClassName("contenu");

console.log(contenu);

// Me renvoie un tableau en JS avec mes elements HTML ou encore autrement dit une collection d'elements html 

/* ------------------- document.getElementByTagName ---------------------------
|             est une fonction qui va permettre de                             |
|       recuperer un ou plusieurs elements HTML a partir du nom de la balise   |
------------------------------------------------------------------------------*/


var span = document.getElementsByTagName("span");
console.log(span)

