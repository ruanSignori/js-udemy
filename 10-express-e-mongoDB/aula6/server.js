require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then( () => {
        app.emit('pronto');
    })
    .catch( e => console.log(e));

//Reconhece o id do navegador para saber se o usuário tem alguma atividade no site
//Se entrar em aba anonima ele não reconhece, vai ter que logar novamente
const session = require('express-session');

//As sessões vão ser salvas dentro da base de dados
const MongoStore = require('connect-mongo');

//Mensagens autodestrutivas, usado para mensagens de feedaback, erro, etc. São salvas na sessão.
const flash = require('connect-flash');

//Controle das rotas que o site tem
const routes = require('./routes');

//caminhos do site
const path = require('path');

//recomendação de uso do Express, para uma melhor segurança na aplicação

//Recurso para impedir que outros sites ou aplicativos externos criem formulários/ BOTS.
const csrf = require('csurf');

const { middlewareGlobal, checkCSRFerror, csrfMiddleware } = require('./src/middlewares/middleware');



app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.use(express.json());

//Acesso publico a páginas estáticas, nesse caso a pasta public
app.use(express.static(path.resolve(__dirname, 'public')));


//Configurações de sessão do mongo
const sessiosOptions = session( {
    secret: 'QW8RQ89WASNIFASNIAKSJN78ASFIGBAUSIJBKLAH3PSNQC87',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessiosOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Middle própios
app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCSRFerror);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(5000, () => {
        console.table('Acessar http://localhost:5000');
        console.table('Servidor executando na porta 5000');
    });
});
