function multiplicarValoresVetor(array, valor) {
    for (const i in array) {
        array[i] = array[i] * valor
    }
    return array
}


console.log(multiplicarValoresVetor([1,2,3,4,5], 3))


function multiplicarValoresVetorMaiorQue5(array, valor) {
    for (const i in array) {
        if(array[i] > 5) array[i] = array[i] * valor
    }
    return array
}

console.log(multiplicarValoresVetorMaiorQue5([1,2,3,4,5, 6, 7, 8, 9, 10], 3))