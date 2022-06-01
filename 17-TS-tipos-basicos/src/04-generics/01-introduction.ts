type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(
  array: T[],
  callbackfn: FilterCallback<T>,
): unknown {
  const newArray = [];

  for (const index of array) {
    if (callbackfn(index)) {
      newArray.push(index);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arrayFiltred = array.filter((num) => num < 5);

const myFiltred = myFilter(arrayFiltred, (value) => value < 5);

console.log(myFiltred);
