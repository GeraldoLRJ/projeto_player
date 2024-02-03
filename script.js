const botaoPlauPause = document.getElementById('play-pause');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
const audioCapitulo = document.getElementById('audio-capitulo');
let nomeCapitulo = document.getElementById('capitulo');
const numeroCapitulo = 10;
let tocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
}

function pausarFaixa() {
    audioCapitulo.pause();
}

function tocarPausar() {
    if (tocando === false) {
        tocando = true;
        botaoPlauPause.classList.remove('bi-play-circle-fill');
        botaoPlauPause.classList.add('bi-pause-circle-fill');
        tocarFaixa();
    } else {
        tocando = false;
        botaoPlauPause.classList.remove('bi-pause-circle-fill');
        botaoPlauPause.classList.add('bi-play-circle-fill');
        pausarFaixa();
    }
}

function proximaFaixa() {
    if (capituloAtual < 1 || capituloAtual >= numeroCapitulo){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocando = false;
    tocarPausar();
    trocaNomeCapitulo()
}

function faixaAnterior() {
    if (capituloAtual <= 1 || capituloAtual >= numeroCapitulo){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocando = false;
    tocarPausar();
    trocaNomeCapitulo()
}

function trocaNomeCapitulo(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

botaoPlauPause.addEventListener('click', tocarPausar);
botaoAnterior.addEventListener('click', faixaAnterior);
botaoProximo.addEventListener('click', proximaFaixa);