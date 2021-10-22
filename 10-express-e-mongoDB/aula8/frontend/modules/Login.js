
import validator from 'validator';

export default class Login {
    constructor(formClass ) {
        this.error_message = document.querySelector('.error-message');
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

            this.errors.push(1)
        } else {
            this.errors = []
        }

        if (passwordInput.value.length < 3 ||  passwordInput.value.length > 45) {
            passwordInput.insertAdjacentElement('beforeend', this.error_message)
            this.errors.push(1);

        } else {
            this.errors = []
        }

        if (this.errors.length === 0) el.submit();
        
    }
}