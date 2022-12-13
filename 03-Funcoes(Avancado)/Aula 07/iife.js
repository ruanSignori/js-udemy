// IIFE = Immediately Invoked Function Expression

//Função que é executada imediatamente
(function (idade, peso, altura){

    const sobrenome = 'Alberto'
    function falaOi(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(falaOi('luiz'))
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 80, 1.80); //Parametros da função anonima
