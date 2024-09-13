function determinarMaiorMenorDeQuatro(A: number, B: number, C: number, D: number) {
    let MaiorNumero: number;
    let MenorNumero: number;

    // Determinar o maior número
    if (A > B && A > C && A > D) {
        MaiorNumero = A;
    } else if (B > A && B > C && B > D) {
        MaiorNumero = B;
    } else if (C > A && C > B && C > D) {
        MaiorNumero = C;
    } else {
        MaiorNumero = D;
    }

    // Determinar o menor número
    if (A < B && A < C && A < D) {
        MenorNumero = A;
    } else if (B < A && B < C && B < D) {
        MenorNumero = B;
    } else if (C < A && C < B && C < D) {
        MenorNumero = C;
    } else {
        MenorNumero = D;
    }

    console.log("O maior número é: " + MaiorNumero);
    console.log("E o menor número é: " + MenorNumero);
}

// Exemplo de uso
determinarMaiorMenorDeQuatro(4, 10, 20, 50);