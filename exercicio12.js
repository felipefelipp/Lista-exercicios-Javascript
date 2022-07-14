/**
 *  Faça um algoritmo que calcule o fatorial de um número.
 */


function calcularFatorial(fatorial) {
    let numero = 1
    for (let i = fatorial; i > 0; i--) {
        numero *= i
    }
    return numero
}

console.log(calcularFatorial(10))