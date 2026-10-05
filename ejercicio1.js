//TALLER NEQUI . PARTE 1//

//Declarar movimientos 
let movimientos = [50000, -20000, 70000, -10000, 5000, -30000];
let total = 0;
let cantidadRetiros = 0;

for (let i = 0; i< movimientos.length ; i++){
    total = total + movimientos[i];
    
    if (movimientos [i] < 0 ) {
        cantidadRetiros = cantidadRetiros +1 ;
    }
}

console.log ("Total disponible", total);
console.log("Total de retiros", cantidadRetiros);
console.log( "Total movimientos", movimientos.length);



