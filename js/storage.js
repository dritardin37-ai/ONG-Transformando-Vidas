export function salvarDadosFormulario() {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");

    if (!nome || !email || !mensagem) {
        return;
    }

    const dadosFormulario = {
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value
    };

    localStorage.setItem(
        "dadosFormulario",
        JSON.stringify(dadosFormulario)
    );
}

export function restaurarDadosFormulario() {
    const dadosSalvos = localStorage.getItem("dadosFormulario");

    if (!dadosSalvos) {
        return;
    }

    const dadosFormulario = JSON.parse(dadosSalvos);

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");

    if (nome && email && mensagem) {
        nome.value = dadosFormulario.nome;
        email.value = dadosFormulario.email;
        mensagem.value = dadosFormulario.mensagem;
    }
}