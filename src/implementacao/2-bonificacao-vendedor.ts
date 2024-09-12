function calcularBonificacao(valorUnit: number, valorVendido: number) {

    let soma = valorVendido * valorUnit;

    if ( soma > 100) {
        return  "Você vendeu: " + soma.toFixed(2) + ". Bonificação de 10% recebida!" //.toFixed(2) formata o número com duas casas decimais
    }
    else {
        return "Vendedor não atingiu o valor mínimo para recebimento de bonificação."
    }

}

console.log(calcularBonificacao(10.30, 120.20)); 