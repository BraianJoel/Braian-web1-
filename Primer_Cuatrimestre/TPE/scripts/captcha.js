"use strict"
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){
    let numero1 = Math.floor(Math.random() * 11);
    let numero2 = Math.floor(Math.random() * 11);
    let nodoSuma = document.getElementById("suma");
    nodoSuma.innerHTML = numero1 + " + " + numero2;

    let form = document.querySelector('#contacto-form');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let nodoResultado = document.getElementById("resultado");
        let resultado = nodoResultado.value;
        let nodoVerificador = document.querySelector('#verificador');

        if (resultado == numero1 + numero2) {  
            console.log("Captcha válido");
            nodoVerificador.innerHTML = "Captcha correcto, su email ha sido enviado satisfactoriamente";
        } else {
            console.log("Captcha inválido")
            document.querySelector('#verificador').innerHTML = "Captcha incorrecto, por favor reintente la suma";
        }
    });
}