// serve para criar um escopo e utilizar
var MyNameSpace;
(function (MyNameSpace) {
    var name = 'Ruan';
    var PersonNameSpace = /** @class */ (function () {
        function PersonNameSpace(name) {
            this.name = name;
        }
        return PersonNameSpace;
    }());
    MyNameSpace.PersonNameSpace = PersonNameSpace;
    var person = new PersonNameSpace('Ruan');
    var SecundaryNameSpace;
    (function (SecundaryNameSpace) {
        SecundaryNameSpace.nameSpace2 = 'Nome secundário';
    })(SecundaryNameSpace = MyNameSpace.SecundaryNameSpace || (MyNameSpace.SecundaryNameSpace = {}));
})(MyNameSpace || (MyNameSpace = {}));
var newPerson = new MyNameSpace.PersonNameSpace('Abajsf');
console.log(MyNameSpace.SecundaryNameSpace.nameSpace2);
/// <reference path="01-namespace.ts"/>
// Para o código abaixo funcionar
// precisa ir no arquivo tsconfig.json
// e alterar o "module": "commonjs",   
// para    
// "module": "AMD", ou
// "module": "System", 
console.log(MyNameSpace.SecundaryNameSpace.nameSpace2);
