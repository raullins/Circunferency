// const = Variável que não pode ser modificada

//let pi = 3.14;
const pi = 3.1459;
let raio;
let circunferencia;

document.getElementById("btnCalcular").onclick = function(){
    raio = Number(document.getElementById("inputRaio").value);

    circunferencia = 2 * pi * raio;

    document.getElementById("resultado").textContent = `A circunferencia é igual a ${circunferencia} UM`;
};

