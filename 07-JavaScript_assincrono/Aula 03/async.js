function random(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function promiseFunction(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo)
    });
}

/*promiseFunction('Fase 1', random())
    .then(value => {
        console.log(value);
        return promiseFunction('Fase 2', random())
    })
    .then(value => {
        console.log(value);
        return promiseFunction('Fase', random())
    })
    .then(value => {
        console.log(value)
    })
    .catch(e => console.log('Error', e))
*/


async function exe() {
    try {
        const fase1 = await promiseFunction('Fase 1', random());
        console.log(fase1)

        const fase2 = await promiseFunction(2332, random());
        console.log(fase2)

        const fase3 = await promiseFunction('Fase 3', random());
        console.log(fase3)
        console.log('Terminamods na fase', fase3)
    } catch (e) {
        console.log(e)
    }
}
exe()
/*
    Status da promise

    pending -> pendente
    fullfieled -> resolvida
    rejected -> rejeitada
*/