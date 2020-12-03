// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var student = {
    "nome" : "Thomas",
    "cognome" : "Shelby",
    "eta" : "35"
}

for (var key in student) {
    console.log(key ,student[key]);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var classe = [
    {
        "nome" : "Thomas",
        "cognome" : "Shelby",
        "eta" : "35" 
    },
    {
        "nome" : "Alfie",
        "cognome" : "Solomons",
        "eta" : "38" 
    },
    {
        "nome" : "Elizabeth",
        "cognome" : "Gray",
        "eta" : "45" 
    },
    {
        "nome" : "Arthur",
        "cognome" : "Shelby",
        "eta" : "39" 
    }

];

for (var i = 0; i < classe.length; i++) {
    
    console.log(classe[i]);
}
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.