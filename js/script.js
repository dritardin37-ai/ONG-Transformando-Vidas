import {
    carregarPagina,
    configurarNavegacao
} from "./navegacao.js";

document.addEventListener("DOMContentLoaded", function () {

    carregarPagina();
    configurarNavegacao();

});

window.addEventListener("hashchange", carregarPagina);
const btnContraste = document.getElementById("btnContraste");

btnContraste.addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");

    if (document.body.classList.contains("alto-contraste")) {
        btnContraste.textContent = "Desativar alto contraste";
    } else {
        btnContraste.textContent = "Alto contraste";
    }
});