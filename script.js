
function validarCPF() {
    let cpf = document.getElementById("cpf").value;
    let resultado = document.getElementById("resultado");

    if (cpf.length !== 11 || isNaN(Number(cpf))) {
        resultado.textContent = "Digite um CPF com 11 números.";
        resultado.style.color = "red";
    } else {
        let digito1 = parseInt(cpf[0]);
        let digito2 = parseInt(cpf[1]);
        let digito3 = parseInt(cpf[2]);
        let digito4 = parseInt(cpf[3]);
        let digito5 = parseInt(cpf[4]);
        let digito6 = parseInt(cpf[5]);
        let digito7 = parseInt(cpf[6]);
        let digito8 = parseInt(cpf[7]);
        let digito9 = parseInt(cpf[8]);
        let digito10 = parseInt(cpf[9]);
        let digito11 = parseInt(cpf[10]);

        let multiplicao1 = digito1 * 10;
        let multiplicao2 = digito2 * 9;
        let multiplicao3 = digito3 * 8;
        let multiplicao4 = digito4 * 7;
        let multiplicao5 = digito5 * 6;
        let multiplicao6 = digito6 * 5;
        let multiplicao7 = digito7 * 4;
        let multiplicao8 = digito8 * 3;
        let multiplicao9 = digito9 * 2;

        let soma = multiplicao1 + multiplicao2 +
            multiplicao3 + multiplicao4 + multiplicao5 +
            multiplicao6 + multiplicao7 + multiplicao8 +
            multiplicao9;

        let resto = soma % 11;

        let digitoVerificador1 =
            (resto < 2) ? 0 : 11 - resto;

        let multiplicao10 = digito1 * 11;
        let multiplicao11 = digito2 * 10;
        let multiplicao12 = digito3 * 9;
        let multiplicao13 = digito4 * 8;
        let multiplicao14 = digito5 * 7;
        let multiplicao15 = digito6 * 6;
        let multiplicao16 = digito7 * 5;
        let multiplicao17 = digito8 * 4;
        let multiplicao18 = digito9 * 3;
        let multiplicao19 = digito10 * 2;

        let soma2 = multiplicao10 + multiplicao11 +
            multiplicao12 + multiplicao13 + multiplicao14 +
            multiplicao15 + multiplicao16 + multiplicao17 +
            multiplicao18 + multiplicao19;

        let resto2 = soma2 % 11;

        let digitoVerificador2 =
            (resto2 < 2) ? 0 : 11 - resto2;

        if (
            digitoVerificador1 == digito10 &&
            digitoVerificador2 == digito11
        ) {
            resultado.textContent = "CPF válido!";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "CPF inválido!";
            resultado.style.color = "red";
        }
    }
}
