// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var student = {
    "nome" : "Thomas",
    "cognome" : "Shelby",
    "eta" : "35"
}

for (var key in student) {
    console.log(key ,student[key]);
    document.getElementById("log1").innerHTML += "<li>"+ key +" : "+ student[key] + "</li>";
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

//for (var i = 0; i < classe.length; i++) {
    
    console.log(classe);
    document.getElementById("log2").innerHTML = "<li>"+ classe.nome+ "</li>";
//}
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var userStudent = {
    "nome" : "",
    "cognome" : "",
    "eta" : ""
}

function addStudent(){
    var name = prompt("Inserisci il tuo nome");
    userStudent.nome = name;
    var surname = prompt("Inserisci il tuo cognome");
    userStudent.cognome = surname;
    var age = prompt("Inserisci la tua età");
    userStudent.eta = age;
    classe.push(userStudent)
}

//setTimeout(addStudent,2000);
console.log(userStudent);
console.log(classe);
document.getElementById("log3").innerHTML += "<li>"+ classe + "</li>";