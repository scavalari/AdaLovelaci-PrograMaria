document.getElementById('botaoEnviar').addEventListener("click",validaFormulario)


function validaFormulario(){
    if(document.getElementById("email").value != "" &&
       document.getElementById("nome").value != ""){
    alert("Tudo Pronto! Você receberá as novidades por e-mail.")
}else{
    alert("Preencha os campos Nome e E-mail")
    }
}