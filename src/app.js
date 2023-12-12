import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// app.all("*", (req, res) => {
//   res.status(404).send("OOPS!! 404 page not found");
// });

// importing user routers
import userRouter from "./routes/user.Routes.js";

app.use("/api/v1/user", userRouter);

export { app };
