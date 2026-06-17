exports.auth = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            erro: "Não autorizado"
        });
    }

    next();
};