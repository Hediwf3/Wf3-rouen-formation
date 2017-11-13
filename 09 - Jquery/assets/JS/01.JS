/* ---------------------------------------------------------------------------------
|                                                                                   |                 
|                                                                                   |
|                                                                                   |
|                             LA DISPONIBILITE DU DOM                               |
|                                                                                   |
|                                                                                   |
|                                                                                   |
-----------------------------------------------------------------------------------*/



/* ---------------------------------------------------------------------------------+

+   A partir du moment ou mon DOM, c'est a dire l'ensemble de ma page a été chargée 
+   Je peux commencer à utiliser Jquery

+  Je vais mettre l'ensemble de mon Code dans une fonction, cette fonction sera 
+  appelée automatiquement par Jquery lorsque le DOM sera entierement défini. 

                3 Facons de faire 
------------------------------------------------------------------------------------*/
//1

jQuery(document).ready(function(){


//  Ici le DOM est entierement chargé, je peux proceder à mon code JS


});


//2 

$(document).ready(function(){ 

//  Ici le DOM est entierement chargé, je peux proceder à mon code JS

});

//3 

$(function(){

    alert("A 20 ans rien est impossible");

    // en JS

    document.getElementById('TextEnJQuery').innerHTML = "<strong> Texte en JS </strong>";


    // innerhtml s'assimile comme une valeur donc il faut mettre egale 

    // html est une fonction donc entre parenthese 
    // En jQuery les selecteurs sont les meme qu'en CSS 

    $('#TexteEnJQuery').html("Mon texte en JQ")

});

