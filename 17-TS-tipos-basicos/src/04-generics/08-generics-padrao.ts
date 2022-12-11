// Record
const obj1: Record<string, string> = {
  name: 'ruan',
  surname: 'signori'
};

type PeopleProtocol = {
  name?: string;
  surname?: string;
  age?: number
}

// Required
// Torna todos os valores obrigatórios
type PeopleRequired = Required<PeopleProtocol>

// Partial
// Torna todos os valores opcionais
type PeoplePartial = Partial<PeopleRequired>

// Readonly
type PeopleReadonly = Readonly<PeopleRequired>

// Pick
type PeoplePick = Pick<PeopleRequired, 'name' | 'surname'>

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Computa todos os tipos que não estão no 2 tipo, nesse caso A e B
type TypeExclude = Exclude<ABC, CDE>;

// Verifica quais tipos se repetem
type TypeExtract = Extract<ABC, CDE>;

const obj2: PeopleProtocol = {
  name: 'ruan',
  surname: 'signori'
};

// Jeito bruto
type AccountMongo = {
  _id: string,
  name: string,
  age: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
}
/*
type AccountApi = {
  id: string,
  name: string,
  age: number
} */

const accountMongo: AccountMongo = {
  _id: 'auisfguhiasuihfa',
  name: 'AGUIYSFGUIAS',
  age: 30,
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return {...accountData, id: _id}
};

const accountApi = mapAccount(accountMongo);
console.log(accountApi)

