const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.snh1ddk.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`erro: ${error}`);
  }
}

module.exports = main;
