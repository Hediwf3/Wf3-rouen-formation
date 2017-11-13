





$(function(){

    // DOM READY

    // Les flemmard.js

    function l(e){
        console.log(e);
    };
    // Selectionner les balise span 


    // en js 

    l(document.getElementsByTagName('span'));

    // en JQ

    l($('span'));


    // selectioner  mon menu 

    //en JS 
    l(document.getElementById('menu'));

    //en JQ

    l($('#menu'))

    // selection une classe 

    // JS 

    l(document.getElementsByClassName('MaClasse'));

    //JQ

    l($(.MaClasse));



    // selectionner un attribut 

    //Jq 

    l($("[href='http://google.fr"));




});

