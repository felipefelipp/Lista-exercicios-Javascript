function menorEMaiorValor(array) {
    let menorValor = array[0]
    let maiorValor = 0
    for (let i = 0; i < array.length; i++) {
        if(maiorValor < array[i]) {
            maiorValor = array[i]
        } else if (menorValor > array[i]){
            menorValor = array[i]
        }
    }

    console.log(maiorValor)
    console.log(menorValor)
}

menorEMaiorValor([11,2,5,7,8,3,34,54,7,56,44])