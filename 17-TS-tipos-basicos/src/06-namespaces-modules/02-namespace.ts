/// <reference path="01-namespace.ts"/>

// Para o código abaixo funcionar
// precisa ir no arquivo tsconfig.json
// e alterar o "module": "commonjs",   
// para    
// "module": "AMD", ou
// "module": "System", 

console.log(MyNameSpace.SecundaryNameSpace.nameSpace2)

/* 
  Você pode compilar esse arquivo em um arquivo js e executá-lo
  segue comnado abaixo
          {Caminho do arquivo}                                {Caminho do arquivo que vai ser criado o arquivo js}
  npx tsc src/06-namespaces-modules/02-namespace.ts --outFile src/06-namespaces-modules/02-namespace.js
*/