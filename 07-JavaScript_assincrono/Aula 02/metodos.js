function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function promiseFunction (msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout (() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo)
    });
}

/*Se uma parametro for inválido, caira direto no catch interropendo o restante da promisse.
const promises = [
    promiseFunction('Promise 1', random(1, 5)),
    promiseFunction('Promise 2', random(1, 5)),
    promiseFunction('Promise 3', random(1, 5)),
    promiseFunction('Promise 4', random(1, 5)),
    promiseFunction(22323, random(1, 5))
]; */

/*Vai executar todas as promisses em ordem, se yna der erro ele retorna o erro
Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch( erro => {
        console.log(erro)
    }); */

/*Vai mostrar a que executar mais rápido.
Promise.race(promises)
    .then( valor => {
        console.log(valor);
    })
    .catch( erro =>{
        console.log(erro);
    }); */

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return promiseFunction('Baixei a página', 3000)
    }
}

//Sempre que a gente der um promise.reject() ele cai direto no catch
baixaPagina()
    .then(dadosPagina =>{
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro', e));