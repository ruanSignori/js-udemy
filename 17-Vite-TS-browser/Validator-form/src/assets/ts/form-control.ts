import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password')  as HTMLInputElement;
const repeat_pasword = document.querySelector('.password2')  as HTMLInputElement;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  hiddeErrorMessages(this); //This está fazendo referencia ao próprio form 
  checkForEmptyFields(username, email, password, repeat_pasword);
  checkEmail(email);
  checkEqualPasswords(password, repeat_pasword);
  if (shouldSendForm(this)) console.log(username.value, email.value, password.value, repeat_pasword.value)
});

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach(input => {
    if (!input.value) showErrorMessage(input, 'Não pode estar vazio')
  })
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido')
};

const checkEqualPasswords = (
  password: HTMLInputElement, 
  repeat_pasword: HTMLInputElement
): void => {
  if (password.value !== repeat_pasword.value) {
    showErrorMessage(password, 'As senhas não são iguais')
    showErrorMessage(repeat_pasword, 'As senhas não são iguais')
  };
};

const hiddeErrorMessages = (form: HTMLFormElement): void => {
  form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach(item => 
    item.classList.remove(SHOW_ERROR_MESSAGES)
  );
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
  let send = true;
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach(() => (send = false));

  return send;
};

