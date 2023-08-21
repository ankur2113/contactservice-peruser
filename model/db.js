const mongoose = require('mongoose');
const uri = 'YOUR_DATABASE_CONNECTION_URL';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
