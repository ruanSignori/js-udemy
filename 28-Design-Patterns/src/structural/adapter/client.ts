import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './validation/email-validator-protocol';
import { EmailValidatorAdapter } from './validation/email-validator-adapter';

const email = 'sieafa@gmail.com';
const validEmail1 = isEmail(email) ? true : false;

console.log(validEmail1);
// Exemplo acima, você iria usar uma biblioteca de terceiros diretamente no código do cliente;
// Se caso algum dia, você queira trocar a biblioteca, imagina alterar em uns 30 arquivos o modo que você valida um e-mail

//Utilizando o adapter
function emailIsValid(
  emalValidator: EmailValidatorProtocol,
  email: string,
): void {
  const validEmail2 = emalValidator.isEmail(email) ? true : false;
}

emailIsValid(new EmailValidatorAdapter(), 'asibufahiusf@gasg.com');
