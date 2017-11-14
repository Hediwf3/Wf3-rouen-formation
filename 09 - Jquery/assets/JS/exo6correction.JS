
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
        var form      = $('form');
    
        var pseudoError = $('.pseudoError');
        var ageError    = $('.ageError'); 
    
        // Etape 1 & 3 
        // -- Affichage d'une Notification
       

        //a parcourire le teableau

        for(let i=0; i<nombreDeMembres ; i++){



            if(pseudo.val() === membres[i].pseudo){

                pseudoError.fadeIn();
                submit.('disabled');
            }
            else{

                 pseudoError.fadeOut();
                
            }


        }
    
    
        // en temps reel avec input ou queer ou keyboard 
    
        // fonction recherche de la meme valeur dans le tableau 
    
        // fonction afficher alert si nom dans le tableau 
    
        // fonction desactiver submit
    
        // fonction si nom ok submit ok 
    
        // utiliser la val de pseudo pour afficher TITRE Bienvenu 
    
         });
    
                });