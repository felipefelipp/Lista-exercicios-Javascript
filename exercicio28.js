
function verificarParesEImpares(vetor) {
    let par = 0
    let impar = 0
    for (const key in vetor) {
        if(vetor[key] % 2 == 0) {
            par++
        } else {
            impar++
        }
    } 
    console.log(`Quantidade de números pares ${par} - Quantidade de números ímpares ${impar}`)
}

verificarParesEImpares([1,2,3,4,5,6,7,8,9])
