function taxaDeCrescimento(crianca1, tamanhoCrianca1, taxaCrescimento1, crianca2, tamanhoCrianca2, taxaCrescimento2) {
    let totalAnos = 0
    
    crianca1 = {
        nome: crianca1,
        tamanho: tamanhoCrianca1,
        taxaCrescimento: taxaCrescimento1 
    }

    crianca2 = {
        nome: crianca2,
        tamanho: tamanhoCrianca2,
        taxaCrescimento: taxaCrescimento2 
    }


    if (!(crianca1.tamanho == crianca2.tamanho)) {
        if(crianca1.tamanho > crianca2.tamanho) {
            while(crianca1.tamanho > crianca2.tamanho) {
                crianca2.tamanho += crianca2.tamanho * taxaCrescimento2 
                totalAnos++                
            }
            console.log(`Serão necessários ${totalAnos} anos para o(a) ${crianca2.nome} ter o mesmo  tamanho que o(a) ${crianca1.nome}`)            
        } else {
            while(crianca1.tamanho < crianca2.tamanho) {
                crianca1.tamanho += crianca1.tamanho * taxaCrescimento1
                totalAnos++                
            }
            console.log(`Serão necessários ${totalAnos} anos para o(a) ${crianca1.nome} ter o mesmo  tamanho que o(a) ${crianca2.nome}`)
        }
    } 

}

taxaDeCrescimento('Pedro', 150, 0.1, 'João', 190, 0.7)

