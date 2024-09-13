function somaComAjuste(numero1: number, numero2: number) {
    let total = numero1 + numero2;
    if (total > 20){
        total += 8
        console.log(`Adicionando 8 na total totaliza ${total}`);
    }  
    else {
        total -= 5
        console.log(`Subtraindo 5 no total totaliza ${total}`);
    }
}
somaComAjuste(2,5)
