function conferirAlto() {
    const respostaAlto = document.getElementById("respostaAlto").value;

    if (respostaAlto == "Baixo") {
        document.getElementById("respAlto").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respAlto").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirPequeno() {
    const respostaPequeno = document.getElementById("respostaPequeno").value;

    if (respostaPequeno == "Grande") {
        document.getElementById("respPequeno").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respPequeno").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirDevagar() {
    const respostaDevagar = document.getElementById("respostaDevagar").value;

    if (respostaDevagar == "Rápido") {
        document.getElementById("respDevagar").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respDevagar").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirClaro() {
    const respostaClaro = document.getElementById("respostaClaro").value;

    if (respostaClaro == "Escuro") {
        document.getElementById("respClaro").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respClaro").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirFacil() {
    const respostaFacil = document.getElementById("respostaFacil").value;

    if (respostaFacil == "Difícil") {
        document.getElementById("respFacil").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respFacil").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirCerto() {
    const respostaCerto = document.getElementById("respostaCerto").value;

    if (respostaCerto == "Errado") {
        document.getElementById("respCerto").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respCerto").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirPerto() {
    const respostaPerto = document.getElementById("respostaPerto").value;

    if (respostaPerto == "Longe") {
        document.getElementById("respPerto").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respPerto").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirVelho() {
    const respostaVelho = document.getElementById("respostaVelho").value;

    if (respostaVelho == "Novo") {
        document.getElementById("respVelho").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respVelho").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirTudo() {
    const respostaTudo = document.getElementById("respostaTudo").value;

    if (respostaTudo == "Nada") {
        document.getElementById("respTudo").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respTudo").innerHTML = "Resposta Errada! Tente novamente";
    }
}
function conferirInicio() {
    const respostaInicio = document.getElementById("respostaInicio").value;

    if (respostaInicio == "Fim") {
        document.getElementById("respInicio").innerHTML = "Parabéns!";
    }
    else {
        document.getElementById("respInicio").innerHTML = "Resposta Errada! Tente novamente";
    }
}