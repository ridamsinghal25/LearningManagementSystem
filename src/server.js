import dotenv from "dotenv";
import { app } from "./app.js";
import connectToDB from "./configs/dbConn.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectToDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });

    app.listen(PORT, () => {
      console.log(`Server is up at ${PORT} port`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection FAILED!!! ", err);
  });
