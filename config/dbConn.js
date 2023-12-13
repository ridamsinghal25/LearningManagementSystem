import mongoose from "mongoose";

const connectToDB = async (req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    if (connection) {
      console.log(`Connected to Mongodb: ${connection.connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
