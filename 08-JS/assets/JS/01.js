//alert("Wow ! tu es sur ma page ! Fdp")


// Deux slash pour fair un commentaire uniligne 


/* 
ici je peux faire un commentaire 
sur plusier ligne 
*/ 


// Declarer une variable JS 

var prenom;

// affecter une valeur 

prenom = "Hedi"

// Afficher la valeur de ma variable dans la console 

console.log(prenom);



// ----------------------------------------------------------------------- Les types de variables -----------------------------------------------------------------------------

// ici typeof permet de connaitre le type de la var

console.log(typeof prenom);

// declaration ety affectation d'une valeur a une variable 

var age = 40; 


console.log(age)


console.log (typeof age)


/*---------------------------------------------------------------------La porté des variables ------------------------------------ 
les variables déclares directement a la racine du fichier sont appelées variable "globales" 

elles sont disponible dans l'ensemble de votre document y compris dans les fonctions / boucles

la portée des variable globale s'arrette au fichier 

les variables declarer a l'interieur  d'une fonction sont  applées variable locales. 

elles sont disponible uniquement à l'interieur de celle ci. 
---------------------------------------------------------------------------- ----------------------------- - - - - - -  - - - */ 



// variables FLOAT 

var uneDecimale = -2.984;
console.log(uneDecimale)
console.log (typeof uneDecimale)


// les booléens Vrai Faux 

var unBooleen = false
console.log(unBooleen);
console.log(typeof unBooleen);

// --------------------------------------- les constantes

// La declaration CONST permet de créer une constnate accessible uniquement en lecture. 
//sa valeur ne pourra pas etre modifieée par des reafectation ulterieur. 
// une constante ne peut pas etre declarer a nouveau et Generalement lpar convention les constantes ont en MAJUSCULE


const HOST = "localhost";
const USER = "root";
const PASSWORD ="mysql";


// je ne peux pas faire par exemple 
// user = "Hedi"
//sinon type error 



/* -------------------------------------------------------------
                                   la MINUTE INFO


                                   Au fur et a mesure que l'on affecte ou re affecte des valeurs a une variable celle ci prend la nouivelle valeur et le nouveaux type


la fonction parsint permet de retourner une chaine de caractere en entier numerique*/ 

var unNombre ="24";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

unNombre ="12.55";
console.log(unNombre);
console.log(typeof unNombre);

// la fonction parsefloat permet de retourner un Float a partir d'une chaine de caractere 
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// conversion d'un nobre en string avec toString()
var unNombreQuiDevientString = 10 ;

console.log( unNombreQuiDevientString.toString() );
 
console.log(typeof unNombreQuiDevientString);