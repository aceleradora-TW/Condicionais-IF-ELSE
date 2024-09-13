function calcularRaizOuQuadrado(numero : number) {
    if(numero >= 0) {
        return Math.sqrt(numero).toFixed(2);
    } else {
        return Math.pow(numero, 2);
    }
}

console.log(calcularRaizOuQuadrado(-7));

