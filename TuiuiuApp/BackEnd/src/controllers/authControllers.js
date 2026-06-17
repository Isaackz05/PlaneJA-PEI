const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
    try {

        const { nome, email, senha } = req.body;

        const senhaHash = await bcrypt.hash(
            senha,
            10
        );

        const usuario = await User.create({
            nome,
            email,
            senha: senhaHash
        });

        res.status(201).json({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            erro: "Erro ao cadastrar"
        });
    }
};

exports.login = async (req, res) => {

    try {

        const { email, senha } = req.body;

        const usuario = await User.findOne({
            where: { email }
        });

        if (!usuario) {
            return res.status(401).json({
                erro: "Usuário não encontrado"
            });
        }

        const senhaValida =
            await bcrypt.compare(
                senha,
                usuario.senha
            );

        if (!senhaValida) {
            return res.status(401).json({
                erro: "Senha inválida"
            });
        }

        res.json({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            erro: "Erro interno"
        });
    }
};