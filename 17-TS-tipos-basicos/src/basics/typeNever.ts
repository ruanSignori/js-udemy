// Utilizada para lançar um erro ou em laços de repetições

export function handleError(): never {
  throw new Error('Erro');
}

handleError();
