const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const mongoURL = process.env.MONGODB_URI;


if (!mongoURL){
    console.error("Variavel indefinida no arquivo .env")
    process.exit(1)
}


const connectDB = async () => {
    try {
        await mongoose.mongoose.connect(mongoURL)
        console.log("Conectado ao banco com sucesso!")
    } catch (error) {
        console.error("Erroo ao conectar ao MongoDB:", error)
        process.exit(1);
    }
}

module.exports = connectDB