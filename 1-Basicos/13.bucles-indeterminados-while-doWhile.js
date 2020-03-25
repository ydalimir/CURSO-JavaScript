// BUCLE INDETERMINADO WHILE

// BUCLE: POR REPITE
// INDETERMINADO: Indeterminado por que no se sabe cuantas veces va a repetir

// WHILE: Mientras
// DO WHILE: Hacer mientras

/*
SINTAXIS

while (condicion) {
    haga esto

}

*/

var ProductoNC = ["camara fija interna", "camara fija externa", "DVR - XVR", "Video Balum"];
var meses = [
"Enero", "Febrero", "Marzo",
"Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];

var contador = 0;


// Ejemplo 1 
while (contador < 4){

    console.log (ProductoNC[contador]);
    //contador = contador + 1; // Es lo mismo que poner contador ++
    contador ++
} 

contador = 0;
// Ejemplo 2
while ( contador < meses.length ) {
    console.log (meses[contador]);
    contador ++
    
}

// Bucle Indeterminado While
// Se usa cuando quieron que una acción se realice en su primera vez asi la condición no se cumpla
/*
SINTAXIS

do {
     esto
}while (trues);

*/

