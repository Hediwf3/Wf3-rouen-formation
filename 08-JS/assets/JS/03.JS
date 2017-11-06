/* la concatenation -----------------*/ 


var debutdephrase        = "Aujourd'hui ";
var date                 = new Date ();
var suitedephrase        = ", sont présents : ";
var nombresdestagiaires  =  21;
var findephrase          = " stagiaires, <br>";



// nous souhaitons maintenant, grace a la concatenation, 
// afficher tout ce petit monde en un seul morceau ! 


document.write(debutdephrase + date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear() + suitedephrase + nombresdestagiaires + findephrase )

// memo 


// exercice : concatenation a partir des elments suivant 


var phrase1 = " J'me présente je m'appelle Hedi";
var phrase2 = " J'aimerais bien réussir ma vie ";
var age     = 23 ;
var phrase3 = " être aimé";

document.write( phrase1 + phrase2 + age + phrase3); 
    
