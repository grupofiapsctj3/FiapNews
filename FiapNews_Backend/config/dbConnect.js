/*Import mongoose from "mongoose";

// Função para conexão com do banco mongo Atlas via mongoose 

async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection;
};

export default conectaNaDataBase;
*/

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaNaDataBase() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("✅ Conectado ao MongoDB!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error.message);
    process.exit(1);
  }
}

export default conectaNaDataBase;
