import dotenv from "dotenv";
import app from "./app.js";
import connectToDB from "./config/dbConn.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is running at port: ${PORT}`);
});
