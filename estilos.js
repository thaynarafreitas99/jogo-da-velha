var table = document.getElementById("table");
var containerPlay = document.getElementById("container-play");

table.style.display = 'none'
containerPlay.style.display = 'none'

var blocoInicial = document.getElementById("bloco-inicial");
blocoInicial.style.display = 'block'

var jorgador1 = document.getElementById('jogador1');
var jorgador2 = document.getElementById('jogador2');

var jogador1Selecionado = document.getElementById('jogador1Selecionado');
var jogador2Selecionado = document.getElementById('jogador2Selecionado');


var botaoAdicionar = document.querySelector("#botao-iniciar-jogo");

botaoAdicionar.addEventListener("click", function(){
    debugger;
    if(jorgador1.value == '' || jorgador2.value == ''){
        alert('Preencha o nome dos jogadores para continuar');
    }else{
        blocoInicial.style.display = 'none'
        table.style.display = 'block'
        containerPlay.style.display = 'flex'
        jogador1Selecionado.innerText = jorgador1.value;
        jogador2Selecionado.innerText = jorgador2.value;
    }

});
