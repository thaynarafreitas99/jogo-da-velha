var jorgador1 = document.getElementById('jogador1');
var jorgador2 = document.getElementById('jogador2');

var containerJogadorUm = document.getElementById('div-1-selecionado');
var containerJogadorDois = document.getElementById('div-2-selecionado');
var jogador1Selecionado = document.getElementById('jogador1Selecionado');
var jogador2Selecionado = document.getElementById('jogador2Selecionado');


// Quando todas as tds forem clicadas
var todasTds = document.querySelectorAll('td');
var combinacaoBolinha = [];
var combinacaoX = [];
var clicou = 1;

var nomesPorExtenso = {
    'um': 1,
    'primeiraTr': 1,
    'dois': 2,
    'segundaTr': 2,
    'tres': 3,
    'terceiraTr': 3,
    'quatro': 1,
    'cinco': 2,
    'seis': 3,
    'sete': 1,
    'oito': 2,
    'nove': 3
}

// para seleção e verificar quem ganhou
var tabuleiro = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const posicoesGanhadoras = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
];


// Funcao pra marcar X ou bolinha nas TDS
todasTds.forEach(function(td) {
    td.addEventListener('click', function() {
        var tdSelecionada = document.getElementById(td.id);
        var span = document.createElement('span');

        const tr = this.closest('tr'); // Encontra a linha <tr> pai da célula clicada
        var posicaoTr = Number(nomesPorExtenso[tr.id]) - 1;
        var posicaoTd = Number(nomesPorExtenso[td.id]) - 1;

        // Validação para não criar 2x na mesma td
        var verificaSeJaTemItem = tdSelecionada.getElementsByTagName('span');
        if (verificaSeJaTemItem.length > 0) { 
            return;
        }

        // impar circulo, par x.
        if(clicou % 2 == 0){
            span.className = 'circulo';
            tabuleiro[posicaoTr][posicaoTd] = false;
        }else{
            span.className = 'x';
            span.textContent = 'X';
            tabuleiro[posicaoTr][posicaoTd] = true;
        }

        tdSelecionada.appendChild(span);

        verificaPosicoes();

        clicou = clicou + 1;
    });
});


function verificaPosicoes(){
    for (const sequencia of posicoesGanhadoras) {
        // Só faz a validação de o tamanho dos array de combinação for menor que 3
        if(combinacaoBolinha.length <= 2 || combinacaoX.length <= 2){
            // Sempre reseta, pois o looping só é feito 1 matriz (com 3 combinações dentro) por vez
            combinacaoBolinha = [];
            combinacaoX = [];

            jorgador1
            jogador2

            // looping em cada linha de matriz
            sequencia.forEach(item => {
                // verifica se a linha e coluna da vez está true, se sim da push no array de bolinha
                if(tabuleiro[item[0]][item[1]] == true){
                    combinacaoBolinha.push(true);
                    if(combinacaoBolinha.length == 3){
                        containerJogadorUm.classList.add("x-venceu");
                        jogador1Selecionado.textContent = jogador1.value + " " +  "Venceu!";

                        setTimeout(function() {
                            resetarJogo();
                        }, 4000);
                    }
                    // se não ele verifica se a posição é false, para dar push no array de x.
                }else if(tabuleiro[item[0]][item[1]] == false){
                    combinacaoX.push(false);
                    if(combinacaoX.length == 3){
                        containerJogadorDois.classList.add("bolinha-venceu");
                        jogador2Selecionado.textContent = jogador2.value + " " + "Venceu!";                  

                        setTimeout(function() {
                            resetarJogo();      
                        }, 4000);                     
                    }
                }
            });

        }
    }

    // Se a quantidade de click é 9 e os array for menor que 3 (ninguém venceu, então é velha.)
    if(clicou == 9 && combinacaoX.length < 3 && combinacaoBolinha.length < 3){
        containerJogadorUm.classList.add("x-venceu");
        containerJogadorDois.classList.add("bolinha-venceu");
        jogador1Selecionado.textContent = "Deu velha!";
        jogador2Selecionado.textContent = "Deu velha!";                  

        setTimeout(function() {
            resetarJogo();      
        }, 4000);   
    }
}


function resetarJogo(){
    clicou = 0;
    combinacaoBolinha = [];
    containerJogadorUm.classList.remove("x-venceu");
    containerJogadorDois.classList.remove("bolinha-venceu");
    jogador1Selecionado.textContent = jogador1.value;
    jogador2Selecionado.textContent = jogador2.value;                        

    combinacaoX = [];
    tabuleiro = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    todasTds.forEach(function(td) {
        const itensParaRemover = td.querySelectorAll('span');
        itensParaRemover.forEach(span => {
            span.remove();
        });

    });
}

