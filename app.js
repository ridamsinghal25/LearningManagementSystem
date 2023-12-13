import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(morgan("dev"));

app.use(cookieParser());

app.use("/api/v1/user");

app.all("*", (req, res) => {
  res.status(404).send("OOPS! Page not found");
});

export default app;
