
function determinarMenorMaior(A: number, B: number){
    if(A > B){
        return "O número maior é " + A + " e o número menor é " + B;
    }
    else{
        return "O número maior é " + B + " e o número menor é " + A;
    }
}

console.log(determinarMenorMaior(-12,5));