/**
 *  O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */


function exibirValorLanche(codItem){
    switch (codItem) {
        case 100:
            return {
                descricao: 'Cachorro Quente',
                preco: 'R$ 3.00'
            }
            break
        case 200:
            return {
                descricao: 'Hambúrguer Simples',
                preco: 'R$ 4.00'
            }
            break
        case 300:
            return {
                descricao:'Cheeseburguer',
                preco: 'R$ 5.50'
            }
            break
        case 400:
            return {
                descricao:'Bauru',
                preco: 'R$ 7.50'
            }
            break
        case 500:
            return {
                descricao:'Refrigerante',
                preco: 'R$ 3.50'
            }
            break
        case 600:
            return {
                descricao:'Suco',
                preco: 'R$ 2.80'
            }
            break
        default:
            return 'Item inválido.'
    }
}

console.log(exibirValorLanche(100))
console.log(exibirValorLanche(200))
console.log(exibirValorLanche(300))
console.log(exibirValorLanche(400))
console.log(exibirValorLanche(500))
console.log(exibirValorLanche(600))
console.log(exibirValorLanche(700))