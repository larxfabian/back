const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORTA;

app.use(express.json())
app.use(require("./routes/_routesIndex"))

app.listen(port, () => {
    console.log(`servidor rodando em: http://localhost:${port}`)
})

