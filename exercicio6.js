/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

capitalInicial = 13.567
TaxaJuros = 3/100
tempMesesAplicacao = 12


function retornarJurosSimples(capitalInicial, TaxaJuros, tempMesesAplicacao) {
    let juros = capitalInicial * TaxaJuros * tempMesesAplicacao
    let valFinal = `Investimento inicial: R$${capitalInicial} - Valor Juros: R$${juros.toFixed(3)} - Valor final: R$${(juros + capitalInicial).toFixed(3)}`
    return valFinal
}

function retornarJurosCompostos(capitalInicial, TaxaJuros, tempMesesAplicacao) {
    let montante = capitalInicial * (1 + TaxaJuros) ** tempMesesAplicacao
    let valFinal = `Investimento inicial: R$${capitalInicial} - Valor final: R$${(montante).toFixed(3)}`
    return valFinal
}


console.log(retornarJurosSimples(capitalInicial, TaxaJuros, tempMesesAplicacao))
console.log(retornarJurosCompostos(capitalInicial, TaxaJuros, tempMesesAplicacao))


