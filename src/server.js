import dotenv from "dotenv";
import { app } from "./app.js";
import connectToDB from "./configs/dbConn.js";

dotenv.config({
  path: "./.env",
});

connectToDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is up at ${process.env.PORT} port`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection FAILED!!! ", err);
  });
