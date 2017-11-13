// -- Initialisation de jQuery (DOM READY)
$(function() {
    
        // -- Déclaration de Variables
        var CollectionDeContacts = [];
    
        /* --------------------------------------------------------------
                            DECLARATION DES FONCTIONS
        -------------------------------------------------------------- */
    
        // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
        function ajouterContact(UnContact) {


        }
    
        // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
        function reinitialisationDuFormulaire() {}
    
        // -- Affichage d'une Notification
        function afficheUneNotification() {}
    
        // -- Vérification de la présence d'un Contact dans Contacts
        function estCeQunContactEstPresent(UnEmail) {

            //booleen qui indique la presence ou non d'un contact 


            let estpresent = false; 
            // on parcour le tableau a lrecherce de correnspondance
            for (let i = 0 ; i CollectionDeContacts.length; i++){ 

                    if (UnEmail === CollectionDeContacts[i].email){

                        estpresent = true;
                        // si une correspondance est trouvé est present passe a vrai 
                        break ;

                    }

            }
            


            

        }
    
        // -- Vérification de la validité d'un Email    
        // : https://paulund.co.uk/regular-expression-to-validate-email-address
        function validateEmail(email){
            var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var valid = emailReg.test(email);
    
            if(!valid) {
                return false;
            } else {
                return true;
            }
        }
    
        /* --------------------------------------------------------------
                        TRAITEMENT DE MON FORMULAIRE
        -------------------------------------------------------------- */
    
        // -- Détection de la soumission de mon Formulaire
        $('#contact').on('submit', function(e) {
    
            // -- Voir le contenu de l'évènement
        
            // -- Stopper la redirection de la page
            e.preventDefault();
            // -- Récupération des champs à vérifier
            var nom, prenom, email, tel;
            nom     =$('#nom')
            prenom  =$('#prenom')
            email   =$('#email')
            tel     =$('#tel')
    
            // -- Vérification des informations...
           /*

           on peut utiliser un boleen pour eviter la repition else 
            let mesInfoSontValides = true
            ifletmesinfosontvalide) {

                nom : nom.val()
                prenom : prenom.val()
                email : email .val()
                tel : tel.val()
            };

            Estcequecontactest present 


            */
            let mesInfoSontValides = true

           if(nom.val().length == 0) {
            mesInfoSontValides = false;

            alert("Le champ est erroné")
            // le champ est incorrect 
            // mesinfosontvalides = false;
           }
           if(prenom.val().length == 0) {
            mesInfoSontValides = false;
                        // le champ est incorrect 
                       }
            if(email.val().length == 0) {
                        mesInfoSontValides = false;
                                    // le champ est incorrect 
                                   }
            if(tel.val().length == 0) {
                mesInfoSontValides = false;
                                                // le champ est incorrect 
                     }
 

                                else{     
                                    $('tbody').append(nom.val());
// -- ajouterContact si tous est correct.
$('tbody').append(prenom.val());
$('tbody').append(email.val());
$('tbody').append(tel.val())
           
            
            // -- Alert si erreur dans l'un des champs
    
        });
    
    }); // -- Fin de jQuery READY ! 