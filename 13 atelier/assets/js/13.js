$(function(){
    // Les flemmard.js
   
    function l(e){
       console.log(e);
   };
   
   
   /**
    * Validate email function with regualr expression
    * 
    * https://paulund.co.uk/regular-expression-to-validate-email-address
    * If email isn't valid then return false
    * 
    * @param email
    * @return Boolean
    */
   function validateEmail(email){
       var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       var valid = emailReg.test(email);
   
       if(!valid) {
           return false;
       } else {
           return true;
       }
   }
   
   function validateTel(tel){
       var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
       var valid = telReg.test(tel);
   
       if(!valid) {
           return false;
       } else {
           return true;
       }
   }
   
   
   // Eccouter a quel moment est soumis le formulaire 
   
   $('.formulaire').on('submit', function(e){ 
   
   e.preventDefault(); 
   
   
   // supprimer les differente erreurs 
   
   $('.formulaire .has-error').removeClass('has-error'); 
   $('.formulaire .text-danger').remove();
   $('.formulaire .alert-danger').remove();
   
   
   // Declarer les variables a vérifier 
   
   var nom     = $('#inputName'); 
   var sujet   = $('#inputSujet');
   var email   = $('#inputEmail4');
   var tel     = $('#inputTel');
   var message = $('#comment');
   
   // verification de chaque champ
   
   // verification du Nom 
   
   if(nom.val().length == 0){ 
   
       nom.parent().addClass('has-error');
       $('<p class="text-danger"> N\'oubliez pas de saisir votre nom.</p>').appendTo(nom.parent());
   }
   else{ 
       nom.parent().addClass('has-success');
   }
   
   // verification du Nom 
   
   if(sujet.val().length == 0){ 
       
           sujet.parent().addClass('has-error');
           $('<p class="text-danger"> N\'oubliez pas de saisir un sujet.</p>').appendTo(sujet.parent());
       }
       else{ 
           sujet.parent().addClass('has-success');
       }
       

        // verification du Nom 
   
   if(message.val().length == 0){ 
    
        message.parent().addClass('has-error');
        $('<p class="text-danger"> N\'oubliez pas de saisir votre message.</p>').appendTo(message.parent());
    }
    else{ 
       message.parent().addClass('has-success');
    }
    
   
   // verification du mail
   
   if(!validateEmail(email.val())){ 
       
           email.parent().addClass('has-error');
           $('<p class="text-danger"> Vérifier votre adresse email.</p>').appendTo(email.parent());
       }
       else{ 
           email.parent().addClass('has-success');
       }
       
   
   // verification du Nom 
   
   if(!validateTel(tel.val())){ 
       
           tel.parent().addClass('has-error');
           $('<p class="text-danger"> N\'oubliez pas de saisir votre tel.</p>').appendTo(tel.parent());
       }
       else{ 
           tel.parent().addClass('has-success');
       }
   
   
       if($(this).find('.has-error').length == 0){ 
   
           $(this).replaceWith('<div class="alert alert-success"> Votre demande a bien été envoyée ! Nous vous repndrons dans les meilleurs délais.</div>') 
   
       }
   
   });  // fin de on sumit 
   
   
   }); 