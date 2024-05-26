# Calculadora de Partidas Rankeadas em Node.js

Esse reposítório foi feito para realizar o Desafio de criação de uma calculadora de partidas ranqueadas usando Javascript. Segue abaixo a descrição da situação problema:

 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

## Descrição do Código

Por dar erro ao usar prompt no Node.js, utilizei o readline, precisando então criar uma forma de ler a entrada do usuário e gerar sua saída;


Criei junto a função principal uma função chamada "FacaPergunta", onde cria uma promise, uma função assíncrona que aguarda o usuário inserir as informações;

Por fim criei a função principal chamada "CalculadoraRanqueada" que recebe os parametros "qtdVitoria e qtdDerrota", rebece em "resultado" a subtração das vitorias-derrotas, cria uma variavel para receber o texto referente ao elo, faz uma sequencia de if para verificar qual o elo do jogador e retorna em return para o console o texto pedido no desafio mostrando o saldo do jogador e o elo/ nível dele.

Obrigado por ler até aqui e obrigado Dio.me por realizar este bootcamp!