function calcularBonificacao(valorUnit: number, valorVendido: number) {

    let soma = valorVendido * valorUnit;

    if ( soma > 100) {
        return  "Você vendeu: " + soma + ". Bonificação de 10% recebida!"
    }
    else {
        return "Vendedor não atingiu o valor mínimo para recebimento de bonificação."
    }

}

console.log(calcularBonificacao(10, 120)); 