/**
 * Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */


function notasNecessarias(valor) {
    let cem = 0
    let cinquenta = 0
    let vinte = 0
    let dez = 0
    let cinco = 0
    let dois = 0
    let um = 0
    if (valor % 100 == 0) {
        valor /= 100
        cem = valor
        console.log(valor)
    }
    if (valor % 50 == 0) {
        valor /= 50
        cinquenta = valor
        console.log(valor)
    }
    if (valor % 20 == 0) {
        valor /= 20
        vinte = valor
        console.log(valor)
    }
    if (valor % 10 == 0) {
        valor /= 10
        dez = valor
        console.log(valor)
    }
    if (valor % 5 == 0) {
        valor /= 5
        cinco = valor 
        console.log(valor)
    }
    if (valor % 2 == 0) {
        valor /= 2
        dois = valor 
        console.log(valor)
    } else {
        for (let i = 0; i < valor.length; i++) {
            console.log(valor)
            um++  
        }
    }
    console.log(` ${cem} nota(s) de R$ 100. 
                  ${cinquenta} nota(s) de R$ 50. 
                  ${vinte} nota(s) de R$ 20.
                  ${dez} notas(s) de R$ 10.
                  ${cinco} notas(s) de R$ 5.
                  ${dois} notas(s) de R$ 2.
                  ${dois} notas(s) de R$ 1.`)
}

notasNecessarias(200)