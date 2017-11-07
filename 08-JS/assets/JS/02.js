//Declarer un tableau numerique 

var monTableau = []; 
var myArray    = new Array;

// affecter des valeurs 

monTableau[0] = "Hugo";
monTableau[1] = "Nathan";
monTableau[2] = "Lou";


// afficher le contenu du tableau dans la console 

console.log(monTableau[0]);
console.log(monTableau[1]);
console.log(monTableau);


// Declarer et affecter des valeur a un tableau numerique 

var nosprenoms = ["Emilie", "Hocine", "Terry", "Benjamin", "Hugo"];
console.log(nosprenoms);
console.log(typeof nosprenoms); 

// declarer et affecter  des valeurs 
// pas de tableau associatif en JS

var coordonnee = {

    prenom : "Hedi",
    nom    : "MOKRANI",
    age    : 23 
}; 

console.log(coordonnee);
console.log(typeof coordonnee);


var listeprenoms = ["Hugo", "Rodrigue", "Benjamin"];
var listnoms = ["LIEGARD", "NOUEL", "JOURAND" ];

// je vais creer un tableau numerique a deux dimensions a partir des deux tableau precedent 

var annuaire = [listeprenoms, listnoms];
console.log(annuaire);

//document.write(annuaire[0][1]);
//document.write(" ");
//document.write(annuaire[1][1]);


// exo faire un tableau a deux dimension avec annuairesdesstagiaires qui contient les coordonnees nom prenom age 

var listeprenomsstagiaire = [" stagiaires 1 ", " stagiaires 2 ", " stagiaires 3"];

var listnomsstagiaire = ["nom stagiaires 1", "nom stagiaires 2", "nom stagiaires 3" ];

var listtel = [" 0652253578 ", " 0752253578 ", " 0852253578 "]
 

var annuairesdesstagiaires = [listeprenomsstagiaire, listnomsstagiaire, listtel]

console.log(annuairesdesstagiaires);


document.write(annuairesdesstagiaires [0] [0]);
document.write(annuairesdesstagiaires [1] [0]);
document.write(annuairesdesstagiaires [2] [0]);


document.write(annuairesdesstagiaires [0] [1]);
document.write(annuairesdesstagiaires [1] [1]);
document.write(annuairesdesstagiaires [2] [1]);


document.write(annuairesdesstagiaires [0] [2]);
document.write(annuairesdesstagiaires [1] [2]);
document.write(annuairesdesstagiaires [2] [2]);


// plus simple 

var annuairesdesstagiaires2 = [

    {prenom : "Hedi", nom : "MOKRANI", tel : "0652 25 35 78"},
    {prenom : "Lou", nom : "LEMARIE", tel : "xxxx xx xx xx"},
    {prenom : "Emilie", nom : "FOLLIN", tel : "xxxx xx xx xx"}

];

console.log(annuairesdesstagiaires2);
console.log(annuairesdesstagiaires2[0]['prenom'] );
console.log(annuairesdesstagiaires2[1].prenom );
console.log(annuairesdesstagiaires2[2].prenom );

// ajouter un element 

var couleurs = ["Rouge", "Jaune", "vert"];

// si je souhaite ajouter un element dans mon tableau 
// je fait appel a la fonction push qui me renvoie le nombre d'element de mon tableau

console.log(couleurs);
var nombreelementsdemontableau = couleurs.push("Orange");
console.log(couleurs);
console.log(nombreelementsdemontableau);


// ps la fonction unshift permet de rajouter uin ou plusieurs elements au debut du tableau






// recuperer et sortir le derniere elements 

// la fonction pop me permet de supr le dernier element de mon tableau 

var mondernierelement = couleurs.pop();
console.log(mondernierelement);
console.log(couleurs);

// ps la meme chose est possible avec le premier element grace a la fonction shift()
// la fonction splice( permet de faire sportir un ou plusieur elements de votre tableau)