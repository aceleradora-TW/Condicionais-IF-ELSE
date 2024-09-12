function somaMaiorQueCinquenta(valor1: number, valor2: number) {

    let soma = valor1 + valor2;

    if(soma > 50){
        return "O resultado da soma é: " + soma;
    }
    else{
        return "O resultado da soma é menor que 50"
    }
}

console.log(somaMaiorQueCinquenta(40, 20));
