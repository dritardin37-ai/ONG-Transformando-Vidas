import {
    carregarPagina,
    configurarNavegacao
} from "./navegacao.js";

document.addEventListener("DOMContentLoaded", function () {

    carregarPagina();
    configurarNavegacao();

});

window.addEventListener("hashchange", carregarPagina);