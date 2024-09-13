function ordenarDescendente(A: number, B: number, C: number): string {
    let menor: number;
    let meio: number;
    let maior: number;

    // Verificando a ordem dos valores
    if (A >= B && A >= C) {
        menor = A;
        if (B >= C) {
            meio = B;
            maior = C;
        } else {
            meio = C;
            maior = B;
        }
    } else if (B >= A && B >= C) {
        menor = B;
        if (A >= C) {
            meio = A;
            maior = C;
        } else {
            meio = C;
            maior = A;
        }
    } else {
        menor = C;
        if (A >= B) {
            meio = A;
            maior = B;
        } else {
            meio = B;
            maior = A;
        }
    }

    return `${menor}, ${meio}, ${maior}`;
}

 console.log(ordenarDescendente(59,2,8));