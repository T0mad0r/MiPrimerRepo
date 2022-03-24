//arreglos
let nombres = ['Juan','Carlos','Maria'];

let materia = new Array('Ciencias','Sociales','Mate');
let ciudades = 'Medellin, Bogota' .split(', ');

//..............................................
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

console.log("==========================================");
for (const key in materia){
    console.log(materia[key]);
}
console.log("==========================================");

console.log(ciudades);

for (const ciudad of ciudades){
    console.log(ciudad);
    if (ciudad === 'Medellin') break;
}

console.log("==========================================");

try{
ciudades.forEach((ciudad) =>{
    console.log(ciudad);
    if(ciudad === 'Medellin'){
        throw "Parameter  is not number!";
    }
    });
} catch(e) {
    console.log(e)
}
console.log("==========================================");
// Objetos

const estudiantes = [
    {nombre: "Carlos", carrera: "metemático", semestre: 2},
    {nombre: "Juan", carrera: "Matematico", semestre: 12},
    {nombre: "felipe", carrera: "fisica", semestre: 5},
    {nombre: "guillermo", carrera: "Artes", semestre: 7},
];

    for(const estudiante of estudiantes){
     //   console.log(estudiante.nombre);
    }

    estudiantes.map(c =>{
    //    console.log(c.semestre);
    });

    //const respuesta = estudiantes.filter((c) =>{
       // if(c.semestre >= 5){
            
      //  }
    //})

    const respuesta = estudiantes.filter((c) => c.semestre >= 5).map((c) => c.nombre);
    console.log(respuesta);
    console.log("==========================================");

    let n = 0;
    while (n < 3){
        console.log(n);
        n++;
    }
    console.log("==========================================");

    let i = 0, resultado = 0;
do {
    i++;
    resultado += i;
} while (i < 5);
console.log(resultado);

