function verificarDivisivel(): void {
    // Solicitar os valores de A e B do usuário
    let A: number = parseFloat(prompt("Digite o valor de A: ") || "0");
    let B: number = parseFloat(prompt("Digite o valor de B: ") || "0");

    // Verificar se B é diferente de zero
    if (B === 0) {
        console.log("Divisão por zero não é permitida.");
    } else if (A % B === 0) {
        console.log(`O número ${A} é divisível por ${B}.`);
    } else {
        console.log(`O número ${A} não é divisível por ${B}.`);
    }
}
