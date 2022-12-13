class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        console.log(this.formulario)
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
            console.log('opa')
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhaSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    };

    senhaSaoValidas(){
        let valid = true;
        
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.erro(senha, 'Senha e repetir senha precisam ser iguais');
            this.erro(repetirSenha, 'Ambas as senhas precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length < 12) {
            valid = false;
            this.erro(senha, 'A senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid;
    }

    camposValidos() {
        let valid = true;
        
        for (let erroDeTexto of this.formulario.querySelectorAll('.texto-de-erro')){
            erroDeTexto.remove();
        }
        

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.erro(campo, `Campo "${label}" não pode estar vazio`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.erro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12){
            this.erro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.erro(campo, 'Nome de usuário precisa conter apenas letras ou números');
            valid = false;
        }
        return valid;
    }

    erro (campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('texto-de-erro');
        campo.insertAdjacentElement('afterend', div);
    }
}


const valida = new ValidaFormulario();