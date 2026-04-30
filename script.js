const sortear = document.querySelector("#sortear");

function sortearNumero(){
    let num = document.querySelector("#num");
    let num2 = document.querySelector("#num2");
    let resultado = document.querySelector(".resultado");

    if(num.value === "" && num2.value === ""){
        alert("Primeiro digite os números nos campos abaixo.")
    }else if(Number(num.value) >= Number(num2.value)){
        alert("ERRO, O número inicial não pode ser maior que o número final!")
    }else{
        const min = Math.ceil(num.value);
        const max = Math.ceil(num2.value);
        let valor = Math.floor(Math.random() * (max - min + 1)) + min;

        resultado.style.display = "block";
        resultado.innerHTML = `O número sorteado foi: <span>${valor}</span>`;
    }
}

sortear.addEventListener("click", sortearNumero);