/* -------------------------------------- Les conditions ------------------------------------ */


/*var majoritelegalefr = 18; 





/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.

-------------------------------- */




// 2 creation de ma fonction pour verifier l'age 

/*
function agevis() {
    
    /* methode 1 


    let age = prompt("Bonjour quel age avez vous ?");
    age = parseInt(age);
    return age; 
   */
             
           // 2 b je lui demande son age
           
           /*
           let age = parseInt(prompt("Salut ! Pour entrer sur le site indique ton age" ));
   
           console.log(age);
           console.log(typeof age);

           if( age >= majoritelegalefr) {
            alert("Bienvenue !");
        
        }
        
        else {
        
            window.location = "http://www.google.fr"
            
        }
        
           
   
           
   }        
   
   // Execution de ma fonction         
 
   
   agevis()
/* methode 2 

function verifage {
return parseInt(prompt(bienvenue age ?));
}

if( verifage >= majoritelegalefr) {
            alert("Bienvenue !");
        
        }
        
        else {
        
            window.location = "http://www.google.fr"
            
        }   */



        /* les operateurs de comparaison */ 


        /* l'operateur de comparaison "==" signifie egal a 
        il permet de verifier que 2 var soit egal 

        lopoerateur "===" strictement egale a  il  va comparer la valeur et le type de donée 
        
        loperateur "!=" signifie different de 
        "!==" strictement different de 
        
        */ 


        /* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES








var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";




// Prompt pour mettre l'adresse mail et le mdp 

var emaillogin = prompt("Bonjour quel est votre email"); 

// verif si lemail saisie email user correspond a email; 

if (emaillogin === email) {

    // tout est ok je demande le mdp
    // je demande a l'utilisateur mdp

    var mdplogin = prompt("Bonjour quel est votre mdp"); 


    if (mdplogin === mdp) {

        alert("Bienvenue !");

    }

    else {

        alert ("votre mdp est erronée");
    }

}

else {

    // sinon les emails ne correspondent pas 
    alert("Attention nous n'avons pas reconnue votre email");
}

// les opérateur AND ou && represente ET 

// lopperateur ou  : ||  ou OR 


// loperateur "!" qui signifie le contreaire de ou NOT  
