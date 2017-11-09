/* --
CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. 
Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, 
vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
        
En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur. 
Vous devrez préciser s'il s'agit d'une erreur au niveau du mail ou du mot de passe.    
-- */

var db = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Jean-Christophe','nom':'MONPLAISIR','email':'jc.monplaisir@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];


// Creation du prompt pour demamder le mail 
var emaillogin = prompt("Bienvenu, entrer votre adresse mail.");


// recherche de lemail dans le tableau
 for(i=0; i<=db.length; i++){  
       
    // validation de lemail 


    if (emaillogin == db[i].email){

        
        var mailok = 1;
        
        // prompt mot de passe 
        var mot = prompt("entrer mdp");

        if( mot = db[i].mdp) {


            var motpok = 1; 
        //ecrire le message de bienvenu grace a la conca 

        // faire en sorte aue le nom corresponde a email login 
            if(emaillogin == db[i].email){

                document.write("Bienvenue " + db[i].prenom + " " + db[i].nom )
            }

            
            
        }
        
        if(motpok != 1){

            alert("wrong mdp");
        }


    }
    if(mailok != 1){ 

        alert("wrong mail");

    }

    

    

    

 }
 

// recherche de lemail dans le tableau 
// validation de lemail 

// enttrer de nouveaux votre email si celui si nest pas reconnue 



// recherche mdp

//validation mdp

//ecrire le message de bienvenu grace a la conca 







