
function criaCalculadora (){
    return {
        display: document.querySelector('.display'),

        inicia  (){
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
        },

        pressionaEnter (){
            this.display.addEventListener('keyup', e => {
                if (e.keycode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay (){
            this.display.value = '';
        },

        apagaUm (){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta (){
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if (!conta){
                    alert('Conta inválida');
                    return;
                }   

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes (){
            //Com a arrow function o this vai continuar sendo o this "antigo"
            document.addEventListener('click', e => {
                const el = e.target;
                                    
                if (el.classList.contains('botao-num')){
                    this.botaoParaDisplay(el.innerText);
                }

                if (el.classList.contains('botao-apagar')){
                    this.clearDisplay();
                }

                if (el.classList.contains('botao-del')){
                    this.apagaUm();
                }

                if (el.classList.contains('botao-igual')){
                    this.realizaConta();
                }

                this.display.focus();
            });
        },
        botaoParaDisplay(valor){
            this.display.value += valor;
        }
    };
};

const calculadora = criaCalculadora();
calculadora.inicia();