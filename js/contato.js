    const btn = document.querySelector("#enviar");
    
    btn.addEventListener("click", function (e) {

        //Resgatar os inputs do formulário;
        const campoNome = document.querySelector("#nome");
        const nome = campoNome.value;
        const campoEmail = document.querySelector("#email");
        const email = campoEmail.value;
        const campoMensagem = document.querySelector("#mensagem");
        const mensagem = campoMensagem.value;
        
        //Validar campo 'Nome'
        if (nome.length < 2 || nome.length > 20) {
            e.preventDefault();
            document.querySelector(".erro-nome").classList.add("erro");
            document.querySelector(".erro-nome").innerHTML = "O nome inserido deve possuir entre 2 e 20 caracteres."
            
        } else {
            document.querySelector(".erro-nome").classList.remove("erro");
        }
        //Validar campo 'Email'
        var usuario = email.substring(0, email.indexOf("@"));
        var dominio = email.substring(email.indexOf("@")+1, email.length);
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            
            document.querySelector(".erro-email").classList.remove("erro");

        } else {
            e.preventDefault();
            document.querySelector(".erro-email").classList.add("erro");
            document.querySelector(".erro-email").innerHTML = "Por favor digite um email válido." 
        }

        //Validar campo 'Mensagem'
        if (mensagem.length < 1) {
            e.preventDefault();
            document.querySelector(".erro-mensagem").classList.add("erro");
            document.querySelector(".erro-mensagem").innerHTML = "Por favor, digite sua mensagem.";
         
        } else {
            document.querySelector(".erro-mensagem").classList.remove("erro");
        }
    })
