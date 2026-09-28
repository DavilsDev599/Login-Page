const cadastro= document.getElementById("cadastro");

cadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome_Completo = document.getElementById("nome_completo").value;
    const email_cadastro = document.getElementById("email_cadastro").value;
    const data_nas = document.getElementById("data_nas").value;
    const senha = document.getElementById("senha").value;
    const conf_senha = document.getElementById("conf_senha").value;

    if (
        nome_Completo === "" ||
        email_cadastro === "" ||
        data_nas === "" ||
        senha === "" ||
        conf_senha === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    const data = new Date(data_nas);

    if (isNaN(data.getTime())) {
        alert("Data inválida!");
        return;
    }

    const hoje = new Date();

    if (data > hoje) {
        alert("Data inválida!");
        return;
    }

    if (!email_cadastro.includes("@") || !email_cadastro.includes(".")) {
        alert("Email inválido!");
        return;
    }

    if (senha !== conf_senha) {
        alert("As senhas são diferentes!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioSalvo && usuarioSalvo.email === email_cadastro) {
        alert("Este email já está cadastrado!");
        return;
    }

    const usuario = {
        nome: nome_Completo,
        email: email_cadastro,
        data: data_nas,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    
    cadastro.reset();

    alert("Cadastro realizado com sucesso!");


    console.log("FORMULÁRIO RESETADO");
    
});