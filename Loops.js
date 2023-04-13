var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

// Metodo 2 
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// Metodo while
    var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

    function saludarEstudiantes(estudiante){
        console.log(`hola, ${estudiante}`);
    }

    while(estudiantes.length > 0){
        var estudiante = estudiantes.shift();
        saludarEstudiantes(estudiante);
    }

    // Metodo 2 while
    var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

    function saludarEstudiantes(estudiante){
        console.log(`hola, ${estudiante}`);
    }

    while(estudiantes.length > 0){
        console.log(estudiante)
        var estudiante = estudiantes.shift();
        saludarEstudiantes(estudiante);
    }