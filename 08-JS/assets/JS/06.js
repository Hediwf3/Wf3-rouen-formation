/* ------------------------------ Les fonctions -------------------- */ 


// declarer  une fonction cette fonction ne retourne aucune valeur 

function ditbonjour() {


    // lors de lappel de cette fontction les instruction ci dessous seront executees... 
    alert ("bonjour!");

}


ditbonjour ();



// declarer une fonction qui prend une variable parametre 


function bonjour(prenom, nom) {

    document.write("<p> Hello <strong>" + prenom + " " + nom + "</strong> ! </>" );


}

//appeler la fonction avec des parametres 

bonjour("Hedi", "MOKRANI");

var monprenom = "Nathan";
var monnom = "HEGO";

// exo creer une fonction permettant deffectuer une addition de deux nombre en paramettre 


function calcul(nb1, nb2) {


    return nb1 + nb2



}

document.write("<p>" + calcul(5, 10) + "</p>"); 