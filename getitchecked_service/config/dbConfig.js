const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.COSMOS_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to Azure Cosmos DB');
  } catch (err) {
    console.error('❌ Failed to connect to Azure Cosmos DB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
