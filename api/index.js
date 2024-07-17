import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import fs from "fs";
import { exec } from "child_process";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this if your frontend is on a different port
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.post("/api/compile", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.file;
  const code = file.data.toString("utf8");

  const uniqueId = uuidv4();
  const CODE_PATH = path.join(__dirname, `Code-${uniqueId}.c`);
  const EXE_PATH = path.join(__dirname, `Out-${uniqueId}.exe`);

  fs.writeFileSync(CODE_PATH, code);

  exec(`gcc ${CODE_PATH} -o ${EXE_PATH}`, (compileError, compileStdout, compileStderr) => {
    if (compileError) {
      console.error("Compilation error:", compileStderr);
      return res.status(500).send({ output: `Compilation error: ${compileStderr}`, details: compileStderr });
    }

    exec(`${EXE_PATH}`, (execError, execStdout, execStderr) => {
      if (execError) {
        console.error("Execution error:", execStderr);
        return res.status(500).send({ output: `Execution error: ${execStderr}`, details: execStderr });
      }

      res.send({ output: execStdout });

      fs.unlinkSync(CODE_PATH);
      fs.unlinkSync(EXE_PATH);
    });
  });
});

app.use(express.static(path.join(__dirname, "client", "build")));



app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
