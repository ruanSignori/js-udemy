function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min);
}


//Exemplo com callback
/*function esperaAi(msg, tempo, cb) {

    setTimeout( () => {
        console.log(msg);

        if (cb) cb();
    }, tempo);
}

esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function() {
        esperaAi('Frase 3', rand(1, 3));
    });
});
*/

//Exemplo com promisse
function esperaPromise(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject(new Error('Error'))
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaPromise('Frase 1', rand (1, 3))

    .then(resposta =>{
        console.log(resposta);
        return esperaPromise('Frase 2', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaPromise(1321, rand(1 , 3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Ultima exibição')
    })
.catch( e => {
    console.log('Error:', e)
});

//Quando uma "promessa" for inválida o catch é assionado
console.log('Isso será exibido antes de qualquer promisse.')
