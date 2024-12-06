import express from "express";
import cors from "cors";
import iasRouter from "./src/routes/ias.routes.js";
import userRouter from "./src/routes/user.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/ias", iasRouter);

app.use("/user", userRouter);

app.use(express.urlencoded({ extended: true }));

app.listen(9000, function () {
  console.log("Rodando na porta 9000");
});
