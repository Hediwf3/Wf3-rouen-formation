/* declarer un tableau numerique */ 

var table = ["Hugo", "Hedi", "Lou", "Emilie", "Therry", "Jerome", "Etienne", "Nathan", "Rodolphe"];

console.log(table);

console.log(table.length);


//aficher un prenom 

console.log(table[7]);
console.log(table[2]);
console.log(table[0]);
console.log(table[6]);

// pour recuperer une valeur on utilise l'index 

function l(e) {
    console.log(e)
}

var i = 2; 

l(table[i]);

for(i=0; i < table.length; i++){

    l(i + " " + "- " + table[i])

}


/* Voyons comment proceder avec des objets */ 

var contact = 
    { 

    prenom : "Lou",
    nom    : "Lemarié",
    tel    : "06 52 25 35 78"
 }



 l(contact.prenom)
 l(contact.nom)
 l(contact.tel)


// Tableau numerique d'objet
 var tableau = [

    
    {nom     : "Etudiant 1", prenom  : "Prenom 1",  classe  : "Terminale" },
    {nom     : "Etudiant 2", prenom  : "Prenom 2",  classe  : "Seconde"},
    {nom     : "Etudiant 3", prenom  : "Prenom 3",  classe  : "pôle emplois"}


 ];

l(tableau)

var nombresEtudiant = ("le nombre d'etudiant est : " + tableau.length);

l(nombresEtudiant);


for(i=0; i<tableau.length; i++){
    
    let etudiant = tableau[i];
    l(etudiant.nom + " " + etudiant.prenom + " " + etudiant.classe);
    
    document.write("<ul>");
        
    document.write("<li>" + etudiant.nom + "</li>" + "<li>" + etudiant.prenom + "</li>" + "<li>" + etudiant.classe + "</li>" )

    document.write("</ul>"); 
    

};









