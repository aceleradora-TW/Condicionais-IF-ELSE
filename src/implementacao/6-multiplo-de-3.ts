function verificarMultiploDe3(numero: number) {
    if(numero % 3 === 0){
        return "é múltiplo de 3"
    }
    else{
        return "não é múltiplo de 3"
    }
}

console.log(verificarMultiploDe3(-6));
