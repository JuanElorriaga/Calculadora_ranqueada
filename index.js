const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function FacaPergunta(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

(async function() {
    const qtdVitorias = parseInt(await FacaPergunta("Insira suas vitórias: "));
    const qtdDerrotas = parseInt(await FacaPergunta("Insira suas derrotas: "));
    const resultadoElo = calculadoraRankeada(qtdVitorias, qtdDerrotas);
    console.log(resultadoElo);
    rl.close();
})();

function calculadoraRankeada(qtdVitorias, qtdDerrotas) {
    let resultado = qtdVitorias - qtdDerrotas;
    let elo = "";

    if (resultado <= 10) {
        elo = "Ferro";
    } else if (resultado > 10 && resultado <= 20) {
        elo = "Bronze";
    } else if (resultado >= 21 && resultado <= 50) {
        elo = "Prata";
    } else if (resultado >= 51 && resultado <= 80) {
        elo = "Ouro";
    } else if (resultado >= 81 && resultado <= 90) {
        elo = "Diamante";
    } else if (resultado >= 91 && resultado <= 100) {
        elo = "Lendário";
    } else {
        elo = "Imortal";
    }
    
    return `O Herói tem um saldo de ${resultado} e está no nível de ${elo}`;
}