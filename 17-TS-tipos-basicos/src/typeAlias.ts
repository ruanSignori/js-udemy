type Age = number;

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cian' | 'Magenta' | 'Yellow' | 'Black';
type FavoriteColor = ColorRGB | ColorCMYK;

type People = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: FavoriteColor;
};

export const people: People = {
  name: 'Ruan',
  age: 17,
  salary: 1_200, // 1200
  favoriteColor: 'Blue',
};
console.log(Object.values(people));

export function setFavoriteColor(people: People, color: FavoriteColor): People {
  return { ...people, favoriteColor: color }; // Cópia do objeto People, não muda o objeto original
}

console.log(people);
console.log(setFavoriteColor(people, 'Green'));
