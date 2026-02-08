let resultados = [];
let textoResultados = document.getElementById("results");
let soma = 0;
let textoSoma = document.getElementById("totalSum");
let faces = document.getElementById("faces");
let quantidade = document.getElementById("quantity");

function sortear() {
    textoResultados.innerHTML = "";
    if(isNaN(faces.value || quantidade.value) || faces.value < 1 || quantidade.value < 1){
        return alert("Insira valores válidos!");
    }
    if(faces.value > 100){
        return alert("Você não deve usar um dado com mais que 100 faces!");
    }
    if(quantidade.value > 100){
        return alert("Você não deve rolar mais que 100 dados!")
    }
    resultados = [];
    for(let i = 0; i < quantidade.value; i++) {
        resultados.push(parseInt(Math.random()*parseInt(faces.value)+1));
        soma += resultados[i];
        var span = document.createElement("span");
        span.textContent = resultados[i];
        textoResultados.appendChild(span);
    }
    textoSoma.textContent = soma;
    faces.value = "";
    quantidade.value = "";
    soma = 0;
}

function resetar() {
    faces.value = "";
    quantidade.value = "";
    resultados = [];
    textoResultados.textContent = "";
    soma = 0;
    textoSoma.textContent = "0";
}