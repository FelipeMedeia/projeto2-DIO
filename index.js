let vitorias = 30
let derrotas = 20

let saldoVitorias = calcula_rank(vitorias, derrotas)
let nivel = retorna_rank(saldoVitorias)

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)

function retorna_rank(vitorias){
    if (vitorias <= 10) {
        return "Ferro"
    } else if (vitorias <= 20) {
        return "Bronze"
    } else if (vitorias <= 50) {
        return "Prata"
    } else if (vitorias <= 80) {
        return "Ouro"
    } else if (vitorias <= 90) {
        return "Diamante"
    } else if (vitorias <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}


function calcula_rank(vitorias, derrotas){
    return vitorias-derrotas
}