import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json({ limit: "16kb" }));

app.use(express.static("public/static"));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const apiVersion = "/api/v1";

app.get(`${apiVersion}/api/test`, (req, res) => {
  res.json({ message: "API is working", version: apiVersion });
});

