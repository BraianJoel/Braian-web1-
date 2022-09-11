"use strict"
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina(){

    let form = document.querySelector('#contacto-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault;
    });

    let numero1 = Math.floor(Math.random() * 11);
    let numero2 = Math.floor(Math.random() * 11);
    let nodoSuma = document.getElementById("suma");
    nodoSuma.innerHTML = numero1 + " + " + numero2;
    let nodoVerificador = document.querySelector('#verificador');
    let boton = document.getElementById("boton-form");
    boton.addEventListener("click", verificarFormulario);

    function verificarFormulario() {
        let nodoResultado = document.getElementById("resultado");
        let resultado = nodoResultado.value;

        if (resultado === numero1 + numero2) {  
            console.log("Captcha válido");
            nodoVerificador.innerHTML = "Captcha correcto, su email ha sido enviado satisfactoriamente";
        } else {
            console.log("Captcha inválido")
            document.querySelector('#verificador').innerHTML = "Captcha incorrecto, por favor reintente la suma";
        }
    }
}