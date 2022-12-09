interface ProtocolPeople<T = string, U = number> {
  name: T,
  surname: string,
  age: U
}

type ProtocolPeople2<T = string, U = number> = {
  name: T,
  surname: string,
  age: U
}

const student: ProtocolPeople<string, number> = {
  name: 'ruan',
  surname: 'preto',
  age: 13
}

const student2: ProtocolPeople2<number, string> = {
  name: 2313,
  surname: '12321',
  age: '13'
}