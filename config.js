const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config()
async function connectToDatabase() {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}`, {
      
    });
    console.log('Bağlantı başarılı!');
  } catch (error) {
    console.error('Bağlantı hatası:', error.message);
   
  }
}

module.exports = connectToDatabase;