import cors from "cors";
import express from "express";
import userRouter from "./routers/auth";
import categoryRouter from "./routers/category";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", categoryRouter);
app.use("/api", userRouter);


export const viteNodeApp = app;
