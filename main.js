// Quando todas as tds forem clicadas
var todasTds = document.querySelectorAll('td');
var todasLinhas = document.querySelectorAll('tr');

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
            tabuleiro[posicaoTr][posicaoTd] = true;
        }else{
            span.className = 'x';
            span.textContent = 'X';
            tabuleiro[posicaoTr][posicaoTd] = false;
        }

        tdSelecionada.appendChild(span);

        verificaPosicoes();

        clicou = clicou + 1;
    });
});


function verificaPosicoes(){
    for (const sequencia of posicoesGanhadoras) {
        if(combinacaoBolinha.length <= 2 || combinacaoX.length <= 2){
            combinacaoBolinha = [];
            combinacaoX = [];

            sequencia.forEach(item => {
                if(tabuleiro[item[0]][item[1]] == true){
                    combinacaoBolinha.push(true);
                    if(combinacaoBolinha.length == 3){
                        setTimeout(function() {
                            return alert('BOLINHA VENCEU!!!')
                        }, 100);
                        resetarJogo();
                    }
                }else if(tabuleiro[item[0]][item[1]] == false){
                    combinacaoX.push(false);
                    if(combinacaoX.length == 3){
                        setTimeout(function() {
                            return alert('X VENCEU!!!');
                        }, 100);
                        resetarJogo();
                    }
                }
            });

        }
    }

    if(clicou == 9 && combinacaoX.length < 3 && combinacaoBolinha.length < 3){
        setTimeout(function() {
            return alert('DEU VELHA!!!');
        }, 100);
        resetarJogo();
    }
}


function resetarJogo(){
    clicou = 0;
    combinacaoBolinha = [];
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


