function mediaAritimetica(array) {
    let totalSomaValores = 0
    let media = array.length
    let mediaAritimetica 
    for (let i = 0; i < array.length; i++) {
        totalSomaValores += array[i]
    }

    mediaAritimetica = totalSomaValores / media
    console.log(`A média aritimetica dos valores é ${mediaAritimetica}`)
}

mediaAritimetica([1,2,3, 4])