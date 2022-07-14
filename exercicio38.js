function imprimirTodosNumerosImpares(param1, param2) {
    for(i = param1; i < param2; i++) {
        if(i % 2 != 0) {
            console.log(i)
        }
    }
}


imprimirTodosNumerosImpares(1, 100)