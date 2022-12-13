function enviar(){
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado')

    const pessoas = [] 

    function recebeEventoForm (evento){
        evento.preventDefault(); //Cancela o os eventos padroes do navegador
        
        //vai receber os valores de tudo que está dentro do form
        const nome = form.querySelector('.nome'); 
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura')

        pessoas.push = ({ //vai empurrar esses valores dentro do array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

       console.log(pessoas)

       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
    }
    
    form.addEventListener('submit', recebeEventoForm); 
}
enviar(); //A function é acionada