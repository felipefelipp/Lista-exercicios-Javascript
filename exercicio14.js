/**
 *  Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
 * casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
 * escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
 * também um default, que retornará uma mensagem de erro no console. 
 */

function venderFrutas(nomeFruta) {
    tratarNomeFruta = nomeFruta.toLowerCase().replace('ç', 'c').replace('ã', 'a')
    switch (tratarNomeFruta) {
        case 'maca':
            return 'Não vendemos esta fruta aqui!'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo!'
            break
        default:
            return 'Fruta não encontrada!'
    }
}

console.log(venderFrutas('maçã'))
console.log(venderFrutas('MeLancia'))
console.log(venderFrutas('Balan'))
