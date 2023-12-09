import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectToDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`);

    console.log(`Database connection successful!! ${conn.connection.host}`);
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED ", error);
    process.exit(1);
  }
};

export default connectToDB;
