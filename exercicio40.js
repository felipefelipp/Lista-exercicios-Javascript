function conceitoNota(vetorNotas) {
    for (let index = 0; index < vetorNotas.length; index++) {
        if(vetorNotas[index] >= 9 && vetorNotas[index] <= 10) {
            console.log(`Valor da nota: ${vetorNotas[index]} - Conceito: A`)
        } else if(vetorNotas[index] >= 7) {
            console.log(`Valor da nota: ${vetorNotas[index]} - Conceito: B`)
        } else if(vetorNotas[index] >= 5) {
            console.log(`Valor da nota: ${vetorNotas[index]} - Conceito: C`)
        } else if(vetorNotas[index] >= 0) {
            console.log(`Valor da nota: ${vetorNotas[index]} - Conceito: D`)
        } else {
            console.log('Nota inválida!')
        }
    }
}

conceitoNota([1,2,3,4.9,5,6,7,8,9,10])