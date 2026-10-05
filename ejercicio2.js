const prompt = require('prompt-sync')();

//Parte 2. VALIDAR EL PIN

let pinCorrecto = "1234";
let intento = prompt("Escribe tu PIN");

while (intento !== pinCorrecto) {
    console.log ("PIN incorrecto");
    intento = prompt("Escribe tu PIN nuevamente:");
}

console.log("Bienvenido a Nequi");

//Seria bueno agregarle el limite de intentos!