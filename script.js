// script.js
const botoes = document.getElementsByClassName("retangulo-descrição");
const votos = {}; // Objeto para armazenar os votos dos candidatos
let totalVotos = 0; // Variável para armazenar o total de votos

for (let i = 0; i < botoes.length; i++) {
    const candidato = botoes[i].value;
    votos[candidato] = 0; // Inicializa a contagem de votos para cada candidato como 0

    botoes[i].addEventListener("click", function() {
        votos[candidato]++; // Incrementa o número de votos para o candidato escolhido
        totalVotos++; // Incrementa o total de votos
        alert("Você votou em " + candidato + "!\nAguarde o resultado da eleição ser divulgado");
        // Aqui você pode adicionar outras ações que deseja que aconteçam quando o botão é clicado.
    });
}

// Função para exibir o resultado dos votos em um alert com porcentagem
function exibirResultadoVotacao() {
    let resultado = "Resultado dos votos:\n";
    let maisVotado = "";
    let votosMaisVotado = 0;
    let segundoMaisVotado = "";
    let votosSegundoMaisVotado = 0;

    for (const candidato in votos) {
        const porcentagem = (votos[candidato] / totalVotos) * 100;
        resultado += candidato + ": " + votos[candidato] + " votos (" + porcentagem.toFixed(2) + "%)\n";

        if (votos[candidato] > votosMaisVotado) {
            segundoMaisVotado = maisVotado;
            votosSegundoMaisVotado = votosMaisVotado;
            maisVotado = candidato;
            votosMaisVotado = votos[candidato];
        } else if (votos[candidato] > votosSegundoMaisVotado) {
            segundoMaisVotado = candidato;
            votosSegundoMaisVotado = votos[candidato];
        }
    }

    alert(resultado);

    // Exibe o representante eleito e o vice-representante eleito com suas porcentagens de votos
    const porcentagemMaisVotado = (votosMaisVotado / totalVotos) * 100;
    const porcentagemSegundoMaisVotado = (votosSegundoMaisVotado / totalVotos) * 100;
    alert("Representante Eleito: " + maisVotado + " com " + votosMaisVotado + " votos (" + porcentagemMaisVotado.toFixed(2) + "%)\n" +
          "Vice-Representante Eleito: " + segundoMaisVotado + " com " + votosSegundoMaisVotado + " votos (" + porcentagemSegundoMaisVotado.toFixed(2) + "%)");
}

// Adiciona o evento de clique ao botão "Ver Resultado" para chamar a função de exibir o resultado
const btnResultado = document.getElementById("btnResultado");
btnResultado.addEventListener("click", exibirResultadoVotacao);
