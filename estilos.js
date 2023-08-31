var table = document.getElementById("table");
table.style.display = 'none'

var blocoInicial = document.getElementById("bloco-inicial");
blocoInicial.style.display = 'block'

const jorgador1 = document.getElementById('jogador1');
const jorgador2 = document.getElementById('jogador2');


var botaoAdicionar = document.querySelector("#botao-iniciar-jogo");

botaoAdicionar.addEventListener("click", function(){
    blocoInicial.style.display = 'none'
    table.style.display = 'block'
});
