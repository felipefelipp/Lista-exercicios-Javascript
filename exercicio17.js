/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */


function aumentoSalarial(funcionario, salario, plano) {
    switch (plano) {
        case 'A':
            salario += salario * 0.1
            console.log(`O salario do funcionário ${funcionario} será de: R$:${salario}`)
        case 'B':
            salario += salario * 0.15
            console.log(`O salario do funcionário ${funcionario} será de: R$:${salario}`)
        case 'C':
            salario += salario * 0.20
            console.log(`O salario do funcionário ${funcionario} será de: R$:${salario}`)
        default:
           console.log('Operação inválida!')
    }
}

aumentoSalarial('Jocaleube', 1356.66, 'C')