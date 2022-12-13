
import validator from 'validator';


export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.errors = [];
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');

        if (!validator.isEmail(emailInput.value)) {
            this.errors.push('E-mail inválido.');
            this.messages(this.errors[-1]);
            //emailInput.insertAdjacentElement('afterend', div_Error)
        
        } else {
            this.errors = [];
        }

        if (passwordInput.value.length < 3 ||  passwordInput.value.length > 45) {
            this.errors.push('Senha muito curta fela');
            this.messages(this.errors[-1]);

        } else {
            this.errors = [];
        }

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
}
