import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/ping", (req, res) => {
  res.send("Pong");
});

app.all("*", (req, res) => {
  res.status(404).send("OOPS! Page not found");
});

export default app;
