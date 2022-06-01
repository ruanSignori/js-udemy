type MapStringsCallBack = (item: string) => string;

export function mapString(
  array: string[],
  callBack: MapStringsCallBack,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callBack(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abcMapped);
