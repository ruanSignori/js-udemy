exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';

    next();
};

exports.outroMiddleware = (req, rex, next) => {
    next();
};

exports.checkCSRFerror = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    };
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};