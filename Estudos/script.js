const formulario=document.querySelector("form");

formulario.addEventListener("submit",function(event){
    const email=document.getElementById("email").value;
    const senha=document.getElementById("senha").value;

    if(email==="" || senha===""){
        event.preventDefault();
        alert("Preencha todos os campos!");
        return;
    }
     if(!email.includes("@")){
        event.preventDefault();
        alert("digite um email valido");
        return;
     }

     localStorage.setItem("email",email);
     localStorage.setItem("senha",senha);

     alert("login feito com sucesso")

     textoMensagem.innerText="Sucesso!";
});