const prompt = require('prompt-sync')();

//Parte  3. El menú

let opcion;
do {
    console.log("====MENÚ===");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");

    opcion = prompt("Elige una opcion: ");

    if (opcion ==="1"){
        console.log("Elegiste ver saldo");
    }
    if (opcion ==="2"){
        console.log("Elegiste enviar dinero");
    }
    if (opcion ==="3"){
        console.log("Elegiste recargar");
    }
    if (opcion ==="4"){
        console.log("Hasta pronto.");
    }

} while (opcion !== "4");

