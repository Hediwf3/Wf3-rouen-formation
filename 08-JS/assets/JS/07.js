/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */



//1 initialisation des variables 

var dateobjet = new Date();
var anneactuelle = dateobjet.getFullYear();

// 2 creation de ma fonction 
function hello() {
 

        // 2 a Je demande a lutilisateur son prénom
            let prenom = prompt("Entrée votre prénom", "Saisir votre prénom" );

            console.log(prenom);
            console.log(typeof prenom);

        // 2 b je lui demande son age
        
        
        let age = parseInt(prompt("Hello " + prenom + " How old are you ?" ));

        console.log(age);
        console.log(typeof age);

        // 2 c J'affiche une alert avec son année de naissance 

        alert("Amazing ! so you where born in " + (anneactuelle-age) );


        //2  d Affichage dans ma page HTML
        document.write("Hello " + prenom + " you are " + age + " years old");

        
}        

// Execution de ma fonction         


hello()