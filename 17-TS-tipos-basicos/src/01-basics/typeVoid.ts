function noneReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noneReturn('Ruan', 'Signori');

const people = {
  name: 'Ruan',
  surname: 'Signori',

  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

people.showName();
