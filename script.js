let resultados = [];
let faces = document.getElementById("faces");
let quantidade = document.getElementById("quantity");

function sortear() {
    if(isNaN(faces.value || quantidade.value) || faces.value < 1 || quantidade.value < 1){
        return alert("Coloque números válidos!");
    }
    resultados = [];
    for(let i = 0; i < quantidade.value; i++) {
        resultados.push(parseInt(Math.random()*parseInt(faces.value)+1));
    }
    document.querySelector(".dice-area").textContent = resultados;
    faces.value = "";
    quantidade.value = "";
}

function resetar() {
    resultados = [];
    faces.value = "";
    quantidade.value = "";
    document.querySelector(".dice-area").textContent = "";
}