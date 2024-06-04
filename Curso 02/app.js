let listaDeNumerosAleatorios = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial () {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}
exibirMensagemInicial ()


function verificarChute () {
    
    let chute = document.querySelector ("input").value;
    console.log (chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ("h1", "você errou!");
            exibirTextoNaTela ("p", ` O número secreto é menor que ${chute}`);
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela ("h1", "você errouS!");
            exibirTextoNaTela ("p", ` O número secreto é maior que ${chute}`);
        }
    } 
    tentativas++;
    limparcampo ()
    }
}

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosAleatorios.length

   if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosAleatorios = [];
   }
   if(listaDeNumerosAleatorios.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio ();
   } else {
    listaDeNumerosAleatorios.push(numeroEscolhido)
    console.log(listaDeNumerosAleatorios);
    return numeroEscolhido;
   }
}
 
function limparcampo (){
    chute = document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparcampo ();
    tentativas = 1;
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
    exibirMensagemInicial ()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
