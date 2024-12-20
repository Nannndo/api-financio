const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./src/config/db");

dotenv.config();


connectDB();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
