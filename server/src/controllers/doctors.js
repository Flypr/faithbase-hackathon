import { Router } from "express";
import db from "../utils/dbFunctions.js";
import { AppError } from "../middleware/errorHandler.js";
const doctorsRouter = Router();

doctorsRouter.get("/allDoctors", async (_req, res) => {
  try {
    const doctors = await db.getDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new AppError("Database error", 500, error, true);
  }
});

doctorsRouter.get("/doctor/:id", async (req, res) => {
  try {
    const doctor = await db.getDoctorInfo(req.params.id);
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new AppError("Database error", 500, error, true);
  }
});

export default doctorsRouter;

