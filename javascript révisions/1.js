var PremierTrimestre = [
    {
        nom       :   "LIEGEARD",
        prenom    :   "Hugo",
        moyenne   :   {
                            francais : 4,
                            math     : 8,
                            physique : 18
                        }
    },
    {
        nom       :   "MANAS",
        prenom    :   "Tanguy",
        moyenne   :   {
                            francais : 6,
                            math     : 15,
                            physique : 9,
                            anglais  : 15.5
                        }
    },
    {
        nom       :   "ARAUJO",
        prenom    :   "Thiago",
        moyenne   :   {
                            francais : 10,
                            math     : 17,
                            physique : 16
                        }
    }
];

function w(t){
    
        document.write(t);
}

console.log(PremierTrimestre[1].nom)

var contact =   {  nom : "TINTIN",
                    prenom    :   "Milou",
                    moyenne   :   {
                                    francais : 6,
                                    math     : 16,
                                    physique : 9,
                                    anglais  : 15.5
                                  } 
 }; //end contact


                PremierTrimestre.push(contact);
w('<ol>')
for(let i=0; i<PremierTrimestre.length; i++){


    

    var etudiants = PremierTrimestre[i];


    var NombreDeMatiere = 0; 
    var somme = 0; 
   
w('<li>')
    w(etudiants.nom + " ");

    w(etudiants.prenom + " ");
   
    for (let matiere in etudiants.moyenne) {
        
        NombreDeMatiere++
        
        w(matiere + " " + ": " + etudiants.moyenne[matiere] + " ")

    }

w('</li>')


};



for(let i=0; i<PremierTrimestre.length; i++){  



var note = PremierTrimestre[i].moyenne.math

somme += note



console.log (note)

}


console.log((somme/PremierTrimestre.length));


 
    
      
    
    