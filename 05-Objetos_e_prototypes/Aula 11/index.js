    const falar = {
        falar(){
            console.log(`${this.nome} está falando`);
        }
    };

    const beber = {
        beber(){
            console.log(`${this.nome} está bebendo`);
        }
    };

    const comer = {
        comer(){
            console.log(`${this.nome} está comendo`);
        }
    };
    /*
        const pessoaPrototype = Object.assign({}, falar, comer, beber);
    */
    const pessoaPrototype = {
        ...falar,
        ...comer,
        ...beber
    }
    
    function criaPessoa(nome , sobrenome) {
        //Criado um objeto vazio com o valor do prototype
        return Object.create(pessoaPrototype , {
            nome: {
                value: nome
            },
            sobrenome: {
                value: sobrenome
            }
        });
    };

const p1 = criaPessoa('Ray', 'Joao');
const p2 = criaPessoa('Maria', 'Joaquina');
console.log(p1);
console.log(p2);