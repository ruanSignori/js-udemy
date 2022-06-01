type Vehicle = {
  brand: string;
  year: number;
};

type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'ford',
  year: 200,
  name: 'Nome',
};

console.log(car);
