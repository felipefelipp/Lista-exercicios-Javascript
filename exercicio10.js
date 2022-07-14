/*Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
ou false.
*/


function verificaInteiroDivisivelPor3(inteiro) {
    return inteiro % 3 == 0 ? true : false 
}

console.log(verificaInteiroDivisivelPor3(8))