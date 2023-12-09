import mongoose from "mongoose";

const connectToDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`Database connection successful!! ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    res.send({
      success: false,
    });
  }
};

export default connectToDB;
