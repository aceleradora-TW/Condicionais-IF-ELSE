import * as readline from 'readline';

// readline é uma funcionalidade nativa do Node.js para interagir com o terminal.
const lerterminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarDivisivel(): void {
    // Solicitar os valores de A e B do usuário
    lerterminal.question("Digite o valor de A: ", (inputA) => {
        const A: number = parseFloat(inputA || "0");

        lerterminal.question("Digite o valor de B: ", (inputB) => {
            const B: number = parseFloat(inputB || "0");

            // Verificar se B é diferente de zero
            if (B === 0) {
                console.log("Divisão por zero não é permitida.");
            } else if (A % B === 0) {
                console.log(`O número ${A} é divisível por ${B}.`);
            } else {
                console.log(`O número ${A} não é divisível por ${B}.`);
            }

            lerterminal.close(); // Fecha a interface de readline
        });
    });
}

// Chama a função para execução
verificarDivisivel();
