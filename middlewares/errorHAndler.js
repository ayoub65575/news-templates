const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        succes: false,
        message: 'Erreur serveur'
    });
}

module.exports = errorHandler;