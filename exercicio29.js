function contarNumerosDentroIntervalo(vetor) {
    let contador = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <=20) {
            contador++
        }
    }
    console.log(`Existem ${contador} números entre [10,20]`)
}

contarNumerosDentroIntervalo([1,2,55,6,7,88,2,3,4,11,21,20,3,14,15])