<h1>Jogo da velha</h1>

Jogo da velha foi um projeto proposto por amigos desenvolvedores para treinar lógica de programação. A linguagem escolhida foi JavaScript.

O foco é a lógica do jogo, a tela inicial foi um a mais feito por mim, e os cenários não previstos foi intencional exemplo: botão para trocar jogador, contar rodada, não foram feitos.

Lógica: fui por um caminho que eu não estava habituada, logo pensei em ifs e elses, mas lembrei de matrizes da epóca da faculdade e é algo que eu não uso no dia a dia, geralmente uso arrays então seria uma oportunidade de estudo. Minha ideia era relacionar a table no html, com matriz e suas posições. Fiz uma matriz com as possíveis combinações vencedoras (sempre uma combinação de 3 posições) e a função que determina o vencedor percorre essa matriz de combinações e verifica a matriz base de posições analisando se tem true(para x) ou false(para bolinha) nessas posições determinando o vencedor. Foi complexo por que eu tinha que verificar sempre linhas e colunas, mas consegui relacionar com as TR e TD montando um objeto que ligava essas posições.

<h4>1. Tela inicial</h4>
![image](https://github.com/thaynarafreitas99/jogo-da-velha/assets/49327331/1da2d396-72c9-4e6e-89b1-630e094d8c33)


<h4>2. Tela do jogo</h4>
![image](https://github.com/thaynarafreitas99/jogo-da-velha/assets/49327331/fb5e67a6-9883-4575-8408-dd39ae987020)


<h4>2.1 Quando venceu</h4>
![image](https://github.com/thaynarafreitas99/jogo-da-velha/assets/49327331/056ff346-c9cd-4bc8-b1e0-6a4322a35b23)


<h4>2.2 Quando dá velha</h4>
![image](https://github.com/thaynarafreitas99/jogo-da-velha/assets/49327331/489edcc2-5b9d-47da-8060-f2319bcfd50f)
