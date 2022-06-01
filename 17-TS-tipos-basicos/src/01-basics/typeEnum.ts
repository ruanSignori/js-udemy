enum Colors {
  RED = 55,
  BLUE = 100,
  YELLOW = 200,
  PURPLE = 'PURPLE',
}

console.log(Colors[200]);
console.log(Colors.RED);

export function chooseColor(cor: Colors): void {
  console.log(Colors[cor]);
}

chooseColor(55);
