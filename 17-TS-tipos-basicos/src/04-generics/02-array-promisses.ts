type myType = number

const arrayNumbers: number[] = [1, 3, 4, 5, 53];

// type generic, no caso o number é um generic padrão do typescript
const arrayNumbersGeneric: Array<number> = [1, 5, 19, 3];

function myPromise(): Promise<myType> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const getData = async () => {
  return 1;
};

getData().then(res => console.log(res + 1));
myPromise().then(res => console.log(res + 1));