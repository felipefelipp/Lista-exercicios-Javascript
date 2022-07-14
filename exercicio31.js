function contarNumerosNegativos(array) {
    let negativos = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0 ) {
            negativos++
        }
    }
    console.log(`Este array possui ${negativos} números negativos!`)
}

contarNumerosNegativos([-1, -4, -5, 7,8,9])