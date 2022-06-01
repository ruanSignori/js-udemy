type ColorsOBJ = typeof colorsObj; // pega um tipo a partir de um valor
type ColorsKey = keyof ColorsOBJ; // pega as chaves do objeto em formato de union types

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function translateColor(color: ColorsKey, colors: ColorsOBJ): string {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
