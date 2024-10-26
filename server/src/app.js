import express from "express";
import patientsRouter from "./controllers/patients.js";
import doctorRouter from "./controllers/doctors.js"

const app = express();
app.disable("x-powered-by");
app.use(express.json());

app.set("trust proxy", 1);

app.use("/patients", patientsRouter);
app.use("/doctors", doctorRouter);

export default app;
