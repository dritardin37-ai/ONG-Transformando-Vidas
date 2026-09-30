export const projetos = [
    {
        titulo: "Doações",
        imagem: "../Imagens/doacoes.webp",
        alt: "Pessoas realizando doações",
        textos: [
            "As doações são fundamentais para a continuidade dos projetos e ações sociais realizadas pela ONG.",
            "Você pode contribuir de acordo com as campanhas e necessidades divulgadas."
        ],
        botao: "Quero ajudar"
    },
    {
        titulo: "Voluntariado",
        imagem: "../Imagens/voluntariado.webp",
        alt: "Voluntários organizando doações",
        textos: [
            "O trabalho voluntário permite contribuir com tempo, conhecimento e habilidades.",
            "Faça parte das ações e ajude a fortalecer os projetos desenvolvidos pela ONG."
        ],
        botao: "Quero ser voluntário"
    },
    {
        titulo: "Impacto social",
        imagem: "../Imagens/impacto.webp",
        alt: "Caixas de doações prontas para transporte",
        textos: [
            "Cada contribuição ajuda a manter as ações e ampliar o atendimento realizado pela organização.",
            "A participação da comunidade fortalece os projetos e permite alcançar mais pessoas."
        ],
        botao: "Conheça nosso trabalho"
    }
];

export function criarProjeto(projeto) {
    return `
        <article class="projeto">
            <div class="imagem">
                <img src="${projeto.imagem}" alt="${projeto.alt}">
            </div>

            <div class="texto">
                <h2>${projeto.titulo}</h2>

                <p>${projeto.textos[0]}</p>

                <p>${projeto.textos[1]}</p>

                <a class="btn" href="#contato">
                    ${projeto.botao}
                </a>
            </div>
        </article>
    `;
}

export function mostrarProjetos() {
    return `
        <section class="projetos" id="projetos">

            <h2 class="titulo">Conheça nossos projetos</h2>

            ${projetos.map(criarProjeto).join("")}

        </section>
    `;
}