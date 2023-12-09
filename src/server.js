import dotenv from "dotenv";
import { app } from "./app.js";
import connectToDB from "./configs/dbConn.js";

dotenv.config({
  path: "./.env",
});

connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is up at ${process.env.PORT} port`);
});
