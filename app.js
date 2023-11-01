let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function ExibirMensagemInicial() {
    ExibirTextoNaTela('h1', 'Jogo do Número Secreto');
    ExibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}



function verificarChute() {
    let chute = document.querySelector('input').value;


    if (numeroSecreto == chute) {

        ExibirTextoNaTela('h1', "Acertou!");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            ExibirTextoNaTela('p', "O número secreto é menor.");
        } else {
            ExibirTextoNaTela('p', "O número secreto é maior.");
        }
        tentativas++;
        apagarCampo();
    }
}
ExibirMensagemInicial();

function apagarCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    apagarCampo();
    tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}