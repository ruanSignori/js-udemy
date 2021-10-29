/*import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.errors = [];
    }

    init() {
        this.events()
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target
        const allInputs = el.querySelectorAll('input.form-control');
        
        if (!allInputs) return this.errors.push(1);

        const inputEMail = allInputs[2].value;

        if (!validator.isEmail(inputEMail)) {
            this.errors.push('E-mail inválido.');
            this.messages(this.errors[-1]);
        }

        const inputTel = allInputs[-1];

        inputTel.length > 13 ? this.errors.push('Número de telefone inválido'): this.errors = [];


        if (this.errors.length === 0) el.submit();
    }

    messages(msg) {
        const div_Error = document.createElement('div');
        const p_error = document.createElement('p');
        const divFather = document.querySelector('.my-3');
        div_Error.classList.add('alert-danger');
        div_Error.classList.add('alert');
        div_Error.appendChild(p_error);
        div_Error.style.marginTop = '20px';
        p_error.innerHTML = msg;

        divFather.appendChild(div_Error);
    }
}*/