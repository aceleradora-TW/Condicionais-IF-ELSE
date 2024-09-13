//Construa um algoritmo que, dado quatro valores, A, B, C e D, o algoritmo diga qual é o maior e o menor valor.

function determinarMaiorMenorDeQuatro(A: number, B: number, C: number, D: number) {

    let MaiorNumero;
    if(MaiorNumero = A > B && A > C && A > D){
        return("O maior número é:" + A)
    }
    else if(MaiorNumero = B > A && B > C && B > D){
        return("O maior número é:" + B)
    }
    else if(MaiorNumero = C > A && C > B && C > D){
        return("O maior número é:" + C)
    }
    else{MaiorNumero = D
        return("O maior número é:" + D)
    }

    let MenorNumero;
    if(MenorNumero = A < B && A < C && A < D){
        return("E o menor número é:" + A)
    }
    else if(MenorNumero = B < A && B < C && B < D){
        return("E o menor número é:" + B)
    }
    else if(MenorNumero = C < A && C < B && C < D){
        return("E o menor número é:" + C)
    }
    else{MenorNumero = D
        return("E o menor número é:" + D)
    }

    return MaiorNumero, MenorNumero;
}

determinarMaiorMenorDeQuatro(4.10,20,50)
