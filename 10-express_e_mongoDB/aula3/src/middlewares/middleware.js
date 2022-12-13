exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');

    next();
};

exports.outroMiddleware = (req, rex, next) => {
    next();
};

exports.checkCSRFerror = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    };

    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};