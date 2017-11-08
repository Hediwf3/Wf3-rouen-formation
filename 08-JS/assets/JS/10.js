/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/



/*

var Contacts = [
    
        {
            prenom      : "Hugo",
            nom         : "LIEGEARD",
            contac: {
                              email   : "wf3@hl-media.fr",
                              adresse : {
                                            ville  : "Ducos",
                                            cp     : 97224,
                                            region : "Martinique",
                                            pays   : "France"
                                        },
                              tel     : {
                                            fixe : "0596 108 328",
                                            fax  : "0596 108 632",
                                            port : "0783 97 15 15"
                                        }
                          }
        },
        {
            prenom      : "Rodrigue",
            nom         : "NOUEL",
            coordonnees : {
                              email   : "wellcommunication.net@gmail.com",
                              adresse : {
                                            ville  : "Fort-de-France",
                                            cp     : 97200,
                                            region : "Martinique",
                                            pays   : "France"
                                        },
                              tel     : {
                                            fixe : "0596 XXX XXX",
                                            fax  : "",
                                            port : "0696 07 04 34"
                                        }
                          }
        },
    
    ];
    */
    


    // creer un tableau 3D avec en premier prenom > matiere > notematiere pour pouvoir faire des combinaison 

    // pour creer un moyenne diviser la totalite par length 


/*

var trimestre = [
    
     {        
       
                    prenom1 :{
                    
                            matiere : { 
                                matiere1 : "Physique", 
                                matiere2 : "Math" ,
                                matiere3 : "Français", 
                                matiere4 : "Sport" ,
                                matiere5 : "SVT" ,
                                
                                    note : {  
                                        notematiere1 : 10,
                                        notematiere2 : 11,
                                        notematiere3 : 2,
                                        notematiere4 : 13,
                                        notematiere5 : 11,
                                    }
                            
                            }  
                            
                        },
                        
                    prenom2 :{ 
                    
                    matiere : { 
                        matiere1 : "Physique", 
                        matiere2 : "Math", 
                        matiere3 : "Français", 
                        matiere4 : "Sport", 
                        matiere5 : "SVT", 
                        
                            note : {  
                                notematiere1 : 14,
                                notematiere2 : 5,
                                notematiere3 : 16,
                                notematiere4 : 11,
                                notematiere5 : 17,
                            }
                    
                    }
                },
                    
                    prenom3 : { 
                    
                    matiere : { 
                        matiere1 : "Physique" ,
                        matiere2 : "Math" ,
                        matiere3 : "Français", 
                        matiere4 : "Sport" ,
                        matiere5 : "SVT" ,
                        
                            note : {  
                                notematiere1 : 11,
                                notematiere2 : 11,
                                notematiere3 : 12,
                                notematiere4 : 18,
                                notematiere5 : 14,
                            }
                    
                    }
                },

                    prenom4 : { 
                    
                    matiere : { 
                        matiere1 : "Physique", 
                        matiere2 : "Math", 
                        matiere3 : "Français", 
                        matiere4 : "Sport", 
                        matiere5 : "SVT" ,
                        
                            note : {  
                                notematiere1 : 10,
                                notematiere2 : 19,
                                notematiere3 : 12,
                                notematiere4 : 14,
                                notematiere5 : 11,
                            }
                    
                    }
                },

                    prenom5 : { 
                    
                    matiere : { 
                        matiere1 : "Physique", 
                        matiere2 : "Math", 
                        matiere3 : "Français", 
                        matiere4 : "Sport", 
                        matiere5 : "SVT", 
                        
                            note : {  
                                notematiere1 : 9,
                                notematiere2 : 11,
                                notematiere3 : 2,
                                notematiere4 : 13,
                                notematiere5 : 14,
                            }
                    
                    }
                },

            
    }
]

*/

/*
//console.log(trimestre[0].prenom2);




var listeprenom1 = trimestre[0].prenom1;

for (var i = 0; i < listeprenom1.length; i++) {
    console.log(listeprenom[i]);
  }

*/


/*
// -- 2ème façon de faire avec "length"
var NbElementDansMonTableau = prenom1.length;
for(let i = 0 ; i < NbElementDansMonTableau ; i++) {
    console.log(Prenoms[i]);
}
*/

var PremierTrimestre = [
    {
        nom      :   "LIEGEARD",
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
                            math     : 15,
                            physique : 16
                        }
    }
];


console.log(PremierTrimestre[0].moyenne);



// faire apparaitre le nom et le prenom des etudiants 
document.write("<ul>")
for (var i = 0; i < PremierTrimestre.length; i++) {
    document.write("<li>" + PremierTrimestre[i].prenom + "</li>");
    document.write("<li>" + PremierTrimestre[i].nom + "</li>");


   
    

    
    
  
}

document.write("</ul>")
/*
document.write("<ul>")
for (var j = 0; j < 5; j++)

    document.write("<li>" + PremierTrimestre[j].moyenne + "</li>")

    document.write("</ul>")



// faire apparaitre les matiere avec le notes a coté 



var noms = ["Hedi", "Lou", "Etienne", "Emilie","Jerome"]
var matieres = ["Mathématiques", "ISN", "Physique"]

var somme = 0; 
var moyenne = 0;


var Tableau ={
                             Hedi : {
                                Mathématiques : [19],
                                ISN : [15],
                                Physique : [3]
                             },
                             Lou : {
                                Mathématiques : [21],
                                ISN : [21],
                                Physique : [21]
                             },
                             Etienne : {
                                Mathématiques : [20],
                                ISN : [20],
                                Physique : [20]
                             },
        
}

/*    

for( i=0 ; i<3 ; i++){
    var nom = noms[i]
    var somme = 0;

    document.write("<br>" + nom + "<ul>");
    for(j=0 ; j<3; j++){
        var matiere = matieres[j]
        var somme = somme + Tableau[nom][matiere][0];
        document.write("<li>" + matiere);
        document.write(" : " + Tableau[nom][matiere][0] + "</li>")
        moyenne = somme/(j+1)
        
    }
    document.write("<li> Moyenne = " + Math.round(moyenne) + "</li>");
    document.write("</ul>");
}

*/


