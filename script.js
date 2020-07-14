/* ---------------------------------------USO IF ANIDADOS
var nombre = prompt("Ingresa tu nombre");
var edad = prompt("ingresa tu edad");

if(edad<12){
    console.log(nombre,"Eres un niño");
}else if((edad>11)&&(edad<18)){
        console.log(nombre,"Es un adolescente");
    }else if((edad>17)&&(edad<60)){
            console.log(nombre,"Eres un adulto");
        }
else{
    console.log(nombre,"Eres un anciano");
}*/

/* ------------------------------------USO SENTENCIA SWITCH
var mes = 4;

switch(mes){

    case 1:
        console.log("Enero");
        break;
    case 2:
            console.log("Febrero");
            break;
    case 3:
            console.log("Marzo");
            break;
    case 4:
            console.log("Abril");
            break;
    default:
        console.log("Mes no esta weon");
        break;

}*/

/* ---------------------------------USO DE SENTENCIA FOR

var numero = 50;
for(let i = 0; i<=numero; i++){

    console.log("El valor de i es: ",i);

}
*/

// USO DE FUNCIONES Y ARRAYS
/*
var nombres = ['Hector','Dante','Valeria'];

var familia = new Array('Salas','Ramirez','Matus');

console.log(nombres[2]);
console.log(nombres.length);*/

var alumno01 = "Dante Salas";
var alumno02 = "Valeria Ramirez";
var notas_dante = [7,5,3,5,4];
var notas_valeria = [6,6,3,2,1];
/*promedio_alumno01 = (notas_dante[0]+notas_dante[1]+notas_dante[2]+notas_dante[3]+notas_dante[4])/notas_dante.length;
promedio_alumno02 = (notas_valeria[0]+notas_valeria[1]+notas_valeria[2]+notas_valeria[3]+notas_valeria[4])/notas_valeria.length;

console.log(promedio_alumno01);
console.log(promedio_alumno02);*/

console.log(alumno01,"sus notas son: ",notas_dante);
console.log(alumno02,"sus notas son: ",notas_valeria);


var notas_prueba = [7,1,2,3,5];
let promedio = 0;

for(let i=0; i<notas_prueba.length; i++){
    
    promedio = notas_prueba[i] + promedio;
    /*La variable promedio inicializada en 0, va a contener el valor de cada iteracion 
    y luego le sumara al valor del ciclo actual que tiene la variable i
    
    Ejemplo: x += y	Significa: x = x + y */
    console.log(promedio);
}