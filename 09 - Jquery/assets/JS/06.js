$(function(){

 // Les flemmard.js

 function l(e){
    console.log(e);
};


// je souhaite selectionner toute mes div 

l($('div'))


// je souhaite maintenant selection le menu

l($('#menu'));

// je souhaite tous les elments descendan direct qui sont dans le menu
// je souhaite parmis ces enfants uniquement les elements UL


l($('nav').children('ul'))

// je souhaite recuperer tous les elements 'li' de mon 'ul' 
l($('nav').children('ul').find('li'));


// recupe le deuxieme elements seulement 

l($('nav').children('ul').find('li').eq(1));

// recup le voisin imediat de mon menu

l($('nav').next());
l($('nav').next().next());
l($('nav').prev());


// ----- Les parents 

l($('nav').parent());


});