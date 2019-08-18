
var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";


//querySelectorAll retorna mais de um, um array com as informacoes.
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    //pega um paciente de cada vez.
    var paciente = pacientes[i];
    var pacienteValido = true;

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    //validação para o peso.
    if (peso <= 0 || peso >= 1000){
        pacienteValido = false;
        paciente.querySelector(".info-imc").textContent = 'Peso Invalido!'; 
        
        //define uma nova clase para modificar o estilo do css.
        paciente.classList.add("paciente-invalido");
    }

    if (pacienteValido){
        var imc = calculaImc(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
    }
};


function calculaImc(peso, altura){
    
    var imc = 0;
    
    imc = peso / (altura*altura);
    
    return imc.toFixed(2);
}

//Eventos JS.


//função para escutar os eventos do h1 abaixo.
/*
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Oi");
}
*/

//Exemplo de função anonima.
titulo.addEventListener("click", function(){
    console.log("oi mundo!");
});


