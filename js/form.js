//função para evento do botão clicar.
var btAdd = document.querySelector("#adicionar-paciente")

btAdd.addEventListener("click", function(event){
    //responsavel por definir o evento default, o default do html é mandar o form e recarregar a pagina.
    event.preventDefault();

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


    //Adiciona os valores pegando do form que retorna um objeto.
    var paciente = returnDadosPacientes(form);

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

})


//Função para retornar todas as propriedades do form.
function returnDadosPacientes(form){

    //criação de um objeto.
    var paciente ={
        nome: form.nome.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        peso: form.peso.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}