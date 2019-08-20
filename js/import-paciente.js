

var btoAdd = document.querySelector("#import-paciente");

btoAdd.addEventListener("click", function(){

    //Requisicao na API com os pacientes.
    var xml = new XMLHttpRequest();

    xml.open("get","https://api-pacientes.herokuapp.com/pacientes") //Tipo de requisição, URL.
    
    //evento para retornar executar quando retornar os pacientes.
    xml.addEventListener("load", function(){

        
        var cJson = xml.responseText;
        var pacientes = JSON.parse(cJson);

        pacientes.forEach( function(x) {

            addPacienteTabela(x);
        } );

    })
    
    xml.send()
})


function addPacienteTabela(paciente){

    //Dividir todo o código abaixo em pequenas funções.
    
    var form = document.querySelector("#form-adiciona"); 
    var tbody = document.querySelector("#tabela-pacientes")

    console.log(form);

    //Cria uma nova tr para adicionar os novos valores.
    var newTr = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");
    var tdIMC = document.createElement("td");


    tdNome.textContent = paciente.nome;
    tdPeso.textContent = paciente.peso;
    tdAltura.textContent = paciente.altura;
    tdGordura.textContent = paciente.gordura;
    tdIMC.textContent = paciente.imc;

    //Usa metodo abaixo para adicionar as informacoes dentro da TR do HTML.
    newTr.appendChild(tdNome);
    newTr.appendChild(tdPeso);
    newTr.appendChild(tdAltura);
    newTr.appendChild(tdGordura);
    newTr.appendChild(tdIMC);

    //adiciona o novo tr dentro do TBODY, igual é feito no HTML.
    tbody.appendChild(newTr);
    
}