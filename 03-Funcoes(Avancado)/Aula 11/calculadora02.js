
function Calculadora(){
    this.display = document.querySelector('.display');
    
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                this.igual();
            }
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('botao-num')) this.addNumDisplay(el);
            if (el.classList.contains('botao-apagar')) this.clear();
            if (el.classList.contains('botao-del')) this.del(el);
            if (el.classList.contains('botao-igual')) this.igual(el);
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.igual = () => {
        try {
            const conta = eval(this.display.value);

            if(conta === NaN){
                alert('Conta invalida');
                return;
            }
            this.display.value = conta;

        } catch (error) {
            alert('Conta invalida');
            return;
        }
    };
};


const calculadora = new Calculadora();
calculadora.inicia();