import { mostrarProjetos } from "./projetos.js";
import {
    mostrarContato,
    configurarFormulario
} from "./formulario.js";

export function mostrarInicio() {
    return `
        <section class="banner">
            <h2>Transformando vidas</h2>

            <p>
                Conheça algumas das formas de participação e contribuição
                para as ações desenvolvidas pela ONG.
            </p>
        </section>
    `;
}

export function carregarPagina() {
    const areaPrincipal = document.querySelector("#app");

    const rota = window.location.hash;

    if (rota === "#projetos") {
        areaPrincipal.innerHTML = mostrarProjetos();

    } else if (rota === "#contato") {
        areaPrincipal.innerHTML = mostrarContato();

    } else {
        areaPrincipal.innerHTML = mostrarInicio();
    }

    configurarFormulario();
}

export function configurarNavegacao() {

    document.addEventListener("click", function (event) {

        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        const destino = link.getAttribute("href");

        if (!destino || !destino.startsWith("#")) {
            return;
        }

        event.preventDefault();

        window.location.hash = destino;
    });
}