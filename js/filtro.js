
var campoFiltro = document.querySelector("#filtro-tabela");


//Evento de input.
campoFiltro.addEventListener("input", funcFiltro);


function funcFiltro(){
   var cCpoFiltro = this.value;
   var pacientes = document.querySelectorAll(".paciente"); 
   //var pacientes = document.querySelectorAll(".info-nome");

   for (var nX=0; nX < pacientes.length; nX++) {

        var paciente = pacientes[nX];
        var nome = paciente.querySelector(".info-nome").textContent;
        
        //Expressão regular.
        var expressao = new RegExp(this.value, "i");
       

        if (!expressao.test(nome)){
            paciente.classList.add("invisivel");
        }
        else
        {
            paciente.classList.remove("invisivel");
        }

    }
   
}