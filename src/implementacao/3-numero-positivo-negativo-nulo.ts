function verificarNumero(numero: number) {
    if(numero > 0){
        return "POSITIVO"
    }
    else if(numero < 0){
        return "NEGATIVO"
    }
    else{
        return "NULO"
    }
}

console.log(verificarNumero(-6.65));
