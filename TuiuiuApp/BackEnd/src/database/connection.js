const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "TUIUIUDB",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;