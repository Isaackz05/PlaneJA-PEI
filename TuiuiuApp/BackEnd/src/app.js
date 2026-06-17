const express = require("express");
const sequelize = require("./database/connection");

require("./models/User");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

sequelize.sync()
.then(() => {
    console.log("Banco sincronizado");

    app.listen(3000, "0.0.0.0", () => {
        console.log("Servidor iniciado");
    });
})
.catch(err => {
    console.log(err);
});