import {
    salvarDadosFormulario,
    restaurarDadosFormulario
} from "./storage.js";

export function mostrarContato() {
    return `
        <section class="contato" id="contato">

            <h2>Faça parte</h2>

            <p>
                Entre em contato com a ONG para saber mais sobre
                doações e oportunidades de voluntariado.
            </p>

            <form id="formContato" novalidate>

                <div class="campo">
                    <label for="nome">Nome</label>
                    <input
                    type="text"
                    id="nome"
                    name="nome"
                    aria-describedby="erroNome"
                    required
                    >
                    <small class="mensagem-erro" id="erroNome"></small>
                </div>

                <div class="campo">
                    <label for="email">E-mail</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    aria-describedby="erroEmail"
                    required
                    >
                    <small class="mensagem-erro" id="erroEmail"></small>
                </div>

                <div class="campo">
                    <label for="mensagem">Mensagem</label>
                    <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    aria-describedby="erroMensagem"
                    required
                    ></textarea>
                    <small class="mensagem-erro" id="erroMensagem"></small>
                </div>

                <button type="submit" class="btn">
                    Enviar mensagem
                </button>

                <p id="mensagemFormulario" class="mensagem-formulario"></p>

            </form>

        </section>
    `;
}

function validarCampo(campo) {
    const campoContainer = campo.parentElement;
    const mensagemErro = campoContainer.querySelector(".mensagem-erro");

    campoContainer.classList.remove("erro", "sucesso");
    mensagemErro.textContent = "";
    
    campo.setAttribute("aria-invalid", "false");

    if (campo.value.trim() === "") {
        campoContainer.classList.add("erro");
        campo.setAttribute("aria-invalid", "true");
        mensagemErro.textContent = "Este campo é obrigatório.";
        return false;
    }

    if (campo.id === "email") {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(campo.value.trim())) {
            campoContainer.classList.add("erro");
            campo.setAttribute("aria-invalid", "true");
            mensagemErro.textContent = "Digite um e-mail válido.";
            return false;
        }
    }

    campoContainer.classList.add("sucesso");
    return true;
}

export function configurarFormulario() {
    const formulario = document.querySelector("#formContato");

    if (!formulario) {
        return;
    }

    const campos = formulario.querySelectorAll("input, textarea");

    campos.forEach(function (campo) {

        campo.addEventListener("input", function () {
            validarCampo(campo);
        });

    });

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        let formularioValido = true;

        campos.forEach(function (campo) {

            if (!validarCampo(campo)) {
                formularioValido = false;
            }

        });

        const mensagemFormulario =
            document.querySelector("#mensagemFormulario");

        mensagemFormulario.classList.remove("erro", "sucesso");

        if (formularioValido) {

            mensagemFormulario.classList.add("sucesso");
            mensagemFormulario.textContent =
                "Mensagem enviada com sucesso!";

            salvarDadosFormulario();

        } else {

            mensagemFormulario.classList.add("erro");
            mensagemFormulario.textContent =
                "Verifique os campos destacados.";

        }

    });

    restaurarDadosFormulario();
}