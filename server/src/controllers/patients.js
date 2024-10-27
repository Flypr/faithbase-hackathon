import { Router } from "express";
import db from "../utils/dbFunctions.js";
import { AppError } from "../middleware/errorHandler.js";
import model_response from "../utils/aiModelFunction.js";
const patientsRouter = Router();

const dummyPatient = {
  "patient_id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "personal_numeric_number": 123456,
  "date_of_birth": "1985-05-15",
  "gender": "Male",
  "age": 38,
  "blood_group": "A",
  "phone": "+11234567890",
  "email": "john.doe@example.com",
  "symptoms_description": "I have insomnia, dizziness and palpitations",
  "patient_fo_number": 1001,
  "last_ai_model_response": "No issues detected",
  "address": "123 Main St",
  "medical_diagnosis": "Hypertension",
  "examination": "Blood Pressure Check",
  "examination_date": "2023-10-01",
  "prescribed_medication": "Lisinopril",
  "heart_rate": "75",
  "blood_pressure": "120/80",
  "temperature": 98,
  "blood_sugar": 90,
  "date_of_test": "2023-09-15",
  "test_name": "CBC",
  "test_result": "Normal",
  "lab_recommendation": "Routine monitoring recommended"
}


patientsRouter.get("/allPatients", async (_req, res) => {
  try {
    const patiens = await db.getPatients();
    res.status(200).json(patiens);
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new AppError("Database error", 500, error, true);
  }
});

patientsRouter.get("/patient/:id", async (req, res) => {
  try {
    const patient = await db.getAllPacientInfo(req.params.id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new AppError("Database error", 500, error, true);
  }
});

patientsRouter.post("/patient/updateSymptoms/:id", async (req, res) => {
  try {
    const { symptoms } = req.body;
    if (!symptoms) {
      throw new AppError("Missing required fields", 400);
    }

    const response = await db.updatePatientSymptoms(req.params.id, symptoms);
    if (!response) {
      throw new AppError("Update failed", 404);
    }

    const patient = await db.getAllPacientInfo(req.params.id);
    if (!patient) {
      throw new AppError("Get patient failed", 404);
    }

    const doctors_list = await db.getDoctors();
    if (!doctors_list) {
      throw new AppError("Get doctors failed", 404);
    }

    //Call AI module
    const encodedMessage = encodeURIComponent(patient.symptoms_description);
    const url = `http://127.0.0.1:8000/analyze?patient_message=${encodedMessage}`;

    const ai_promt = await fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dummyPatient),
    });
    const ai_response = await ai_promt.json();
    const llm_info = await model_response(doctors_list, ai_response.results);
    //

    res.status(200).json({ message: "Symptoms updated successfully", ai_response: llm_info });

  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new AppError("Database error", 500, error, true);
  }
});

patientsRouter.post("/patient/updateAiModelResponse/:id", async (req, res) => {
  try {
    const { aiModelResponse } = req.body;
    if (!aiModelResponse) {
      throw new AppError("Missing required fields", 400);
    }
    const patient = await db.updatePatientAiModelResponse(req.params.id, aiModelResponse);
    if (!patient) {
      throw new AppError("Update failed", 404);
    }
    res.status(200).json({ message: "Ai model response updated successfully", });
  } catch (error) {
    res.status(500).json({ error: error.message });
    throw new AppError("Database error", 500, error, true);
  }
})

export default patientsRouter;
