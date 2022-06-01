interface People {
  name: string;
}

interface People {
  readonly surname: string;
}

interface People {
  readonly address: readonly string[];
}

export const people: People = {
  name: 'ruan',
  surname: 'sergio',
  address: ['Rua Castelo branco'],
};

// A mesma interface pode ser declarada mais de uma vez,
// quando o script for executado, é feito um merge das
// interfaces que possuem o mesmo nome
