//Arrow function
const functionArrow = () => {
    console.log('Sou uma arrow function');
};

functionArrow();


//Funçõees dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...')
    },
    falei: function (){
        console.log('Outro exemplo')
    }
};
//As duas maneiras acima funcionam tranquilamente

obj.falar();
obj.falei();