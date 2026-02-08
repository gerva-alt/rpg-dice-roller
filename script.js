let resultados = [];
let soma = 0;
let faces = document.getElementById("faces");
let quantidade = document.getElementById("quantity");

function sortear() {
    if(isNaN(faces.value || quantidade.value) || faces.value < 1 || quantidade.value < 1){
        return alert("Coloque números válidos!");
    }
    resultados = [];
    for(let i = 0; i < quantidade.value; i++) {
        resultados.push(parseInt(Math.random()*parseInt(faces.value)+1));
        soma += resultados[i];
    }
    document.getElementById("results").textContent = resultados;
    document.getElementById("totalSum").textContent = soma;
    faces.value = "";
    quantidade.value = "";
    soma = 0;
}

function resetar() {
    resultados = [];
    faces.value = "";
    quantidade.value = "";
    soma = 0;
    document.getElementById("results").textContent = "";
    document.getElementById("totalSum").textContent = "0";
}