
// DOM READY
$(function() {


    var membres = [
      {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
      {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
      {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
      {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
    ];

    function l(r){
        console.log(r);
    };

    l(membres);

    // initialisation des variable
    nombreDeMembres = membres.length;


    // recuperation des differents element 
    // -- Récupération des champs à vérifier
     
    var pseudo    = $('#pseudo');
    var age       = $('#age');
    var email     = $('#email');
    var mdp       = $('#mdp');
    var bienvenue = $('#Bienvenu');
    var form      = $('#formform');

    var pseudoError = $('.pseudoError');
    var ageError    = $('.ageError'); 

    // Etape 1 & 3 
    // -- Affichage d'une Notification
    function afficheUneNotification() {
        $(pseudoError).fadeIn();
        
    };
    function afficheUneNotification() {
        $(pseudoError).fadeIn();
        
    };
   

    function estCeQunContactEstPresent(UnPseudo) {
        
                    // -- Booleen qui indique la présence ou pas d'un contact
                    let estPresent = false;
        
                    // -- On parcourt le tableau à la recherche d'une correspondance
                    for(let i = 0 ; i<membres.length ; i++) {
                        if(UnPseudo === membres[i].pseudo) {
                            // -- Si une correspondance est trouvé "estPresent" passe à VRAI (true)
                            estPresent = true;
                            // -- On arrête la boucle, plus besoin de poursuivre
                            break;
                        }
                    }
                    // -- On retourne le booleen
                    return estPresent;
                }

    //Listener pour acceder value des input
    pseudo.on('input', function(e) {
    
        //eviter la redirection 
    e.preventDefault();

     // -- Vérification de la présence d'un Contact dans membres   8EME ETAPES  on doit parcourire le tableau pour trouver si l'email est present ou non 
     

                  // -- Vérification avec EstCeQunContactEstPresent     
                  if(!estCeQunContactEstPresent(pseudo.val())) {
                    // -- Ajout du Contact

                    $(pseudoError).fadeOut()
                    $('#Bienvenue').html('Bienvenue' + " " + pseudo.val());
                   
                    

                } else {       
                    
                    //la notification pseudoError doit s'afficher

                    afficheUneNotification();
                   
                    // le bouton "submit" être désactivé.


                }
                


    // en temps reel avec input ou queer ou keyboard 

    // fonction recherche de la meme valeur dans le tableau 

    // fonction afficher alert si nom dans le tableau 

    // fonction desactiver submit

    // fonction si nom ok submit ok 

    // utiliser la val de pseudo pour afficher TITRE Bienvenu 

     });

     age.on('change', function(e){ 
        l(age.val());
   

            if(age.val()<18){  


            $(ageError).fadeIn();
            

            }
            else{ 
                $(ageError).hide()

                

            }
            if(age.val() === ""){
                $(ageError).hide()

            }
        

     } );

     // Ettpae 4A 

     form.on('submit', function (event){ 

        event.preventDefault();

        let contact = {

            pseudo  : pseudo.val(),
            age     : age.val(),
            email   : email.val(),
            mdp     : mdp.val(),
            
        };
        membres.push(contact);


        l(membres);

        $(`<p> Merci ${contact.pseudo} ! 
        
        <br><br> Bravo tu est maintenant inscrit
        <br><br> Voici la liste des membres`)
        nombreDeMembres : membres.length;
        for(let i = 0 ; i<membres.length ; i++){
            $(`
            <ul>
            <li>${membres[i].pseudo}</il>
            <li>${membres[i].age}</il>
            <li>${membres[i].email}</il>
                </ul>
       
            
            `).appendTo('body');
       
       };
      

     });
    





     // Validation de toute les valeurs 

            });























