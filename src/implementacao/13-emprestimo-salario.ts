function verificarEmprestimo(salarioBruto: number, valorPrestacao: number) {
    let valorEmprestimo = salarioBruto * (0.30);
    if(valorPrestacao > valorEmprestimo){
        return `O valor ${valorPrestacao} ultrapassa o limite de 30% do salário bruto que é ${valorEmprestimo}`;
    }else{
        return `Empréstimo concedido com sucesso, valor da prestação é ${valorPrestacao}!!`
    }
}
console.log(verificarEmprestimo(1200,300));