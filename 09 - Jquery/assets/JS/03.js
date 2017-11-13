/* ---------------------------------------------------------------------------------
|                                                                                   |                 
|                                                                                   |
|                                                                                   |
|                             Le chainage de methode avec jquery                    |
|                                                                                   |
|                                                                                   |
|                                                                                   |
-----------------------------------------------------------------------------------*/




$(function(){

    function l(e){
        console.log(e);
    };
    // je souhaite cacher toute les div de ma page html 
    l($('div'));
    $('div').hide('slow', function(){ 

        // une fois que mon hide est terminée  mon alert peut sexecuter

        alert('fin du hide');

        //Nota bene la fonctio nsexecutera pour lensemble des selecteur 

        // CSS
        $('div').css('background', 'yellow');
        $('div').css('color', 'red');

        // je fais reaparaitre mes divs 
        $('div').show('slow');

    });


    // en utilisant la methode de chainage vous pouvez faire senchainer plusieur fonction 

    $('p').hide(1000).css({'color' : 'green', 'font-size':'20px'}).delay(2000).show(500);

});