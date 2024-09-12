function verificarParOuImpar(N: number) {
    if(N % 2 === 0){
        return "PAR"
    }
    else{
        return "ÍMPAR"
    }
}

console.log(verificarParOuImpar(2));
