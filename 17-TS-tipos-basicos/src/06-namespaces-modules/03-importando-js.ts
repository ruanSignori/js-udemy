import { sum } from './03-exportando';
/*
  Para importar arquivo JavaScript no TypeScript:
  - Navegue até o arquivo tsconfig.json
  - Marque "allowJs": true, 
*/

// Os valores importados do JavaScript, vão ter tipagem Any
const sumValue = sum(3, 15)
console.log(sum(3, 15))