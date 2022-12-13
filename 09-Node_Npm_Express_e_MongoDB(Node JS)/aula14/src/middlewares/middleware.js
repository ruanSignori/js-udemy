exports.middlewareGlobal = (req, res, next) => {

    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('miranda', 'Não use miranda');
        console.log('');
        console.log(`Vi que voce postou ${req.body.cliente}`);
        console.log('');
    };
    next();
};