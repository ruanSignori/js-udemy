
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

        const div_Error = document.createElement('div');
        div_Error.classList.add('alert-danger');

        if (!validator.isEmail(emailInput.value)) {
            this.errors.push('E-mail inválido.')
            //emailInput.insertAdjacentElement('afterend', div_Error)
            console.log(this.errors)
        
        } else {
            this.errors = []
        }

        if (passwordInput.value.length < 3 ||  passwordInput.value.length > 45) {
            this.errors.push('senha muito curta fela');
            //passwordInput.insertAdjacentElement('afterend', div_Error);
            console.log(this.errors[-1])

        } else {
            this.errors = []
        }

        if (this.errors.length === 0) el.submit();
        
    }

    /*messages() {
        
        const p = div_Error.appendChild('p');
        return p = this.errors.value;
    }*/
}
