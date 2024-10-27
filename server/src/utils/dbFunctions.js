import dbPromise from "../middleware/database.js";
import { AppError } from "../middleware/errorHandler.js";


const getPatients = async () => {
  try {
    const db = await dbPromise;
    const patients = await db.all("SELECT * FROM patients;");
    if (!patients) {
      throw new AppError("No pacients found", 404);
    }
    return patients;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

const getAllPacientInfo = async (id) => {
  try {
    const db = await dbPromise;
    const pacient = await db.get("SELECT p.patient_id, p.first_name, p.last_name, p.personal_numeric_number, p.date_of_birth, p.gender, p.age, p.blood_group, p.phone, p.email, p.symptoms_description, p.patient_fo_number, p.last_ai_model_response, p.address, mh.diagnosis AS medical_diagnosis, mh.examination AS examination, mh.examination_date AS examination_date, m.medication AS prescribed_medication, vs.heart_rate, vs.blood_pressure, vs.temperature, vs.blood_sugar, lr.date_of_test AS date_of_test, lr.test_name, lr.test_result, lr.lab_recomandation AS lab_recommendation FROM patients p LEFT JOIN medical_history mh ON p.patient_id = mh.patient_id LEFT JOIN medications m ON p.patient_id = m.patient_id LEFT JOIN vital_signs vs ON p.patient_id = vs.patient_id LEFT JOIN lab_results lr ON p.patient_id = lr.patient_id WHERE p.patient_id = ?;", id);
    if (!pacient) {
      throw new AppError("No pacients found", 404);
    }
    return pacient;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

// Data is an object data{Patient{}, Medical_history{}, Medications{}, Vital_signs{}, Lab_results{}, Tratament_plans{}
const addPacientAllData = async (data) => {
  try {
    const db = await dbPromise;
    const patient = await db.run("INSERT INTO patients (first_name, personal_numeric_number, last_name, date_of_birth, gender, age, blood_group, phone, email, symptoms_description, patient_fo_number, last_ai_model_response, address) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);", data.patient.first_name, data.patient.personal_numeric_number, data.patient.last_name, data.patient.date_of_birth, data.patient.gender, data.patient.age, data.patient.blood_group, data.patient.phone, data.patient.email, data.patient.symptoms_description, data.patient.patient_fo_number, data.patient.last_ai_model_response, data.patient.address);
    const medical_history = await db.run("Insert INTO medical_history (patient_id, diagnosis, examination, examination_date) VALUES (?,?,?,?);", patient.lastID, data.medical_history.diagnosis, data.medical_history.examination, data.medical_history.examination_date);
    const medications = await db.run("INSERT INTO medications (patient_id, medication) VALUES (?,?);", patient.lastID, data.medications.medication);
    const vital_signs = await db.run("INSERT INTO vital_signs (patient_id, heart_rate, blood_pressure, temperature, blood_sugar) VALUES (?,?,?,?,?);", patient.lastID, data.vital_signs.heart_rate, data.vital_signs.blood_pressure, data.vital_signs.temperature, data.vital_signs.blood_sugar);
    const lab_results = await db.run("INSERT INTO lab_results (patient_id, date_of_test, test_name, test_result, lab_recomandation) VALUES (?,?,?,?,?);", patient.lastID, data.lab_results.date_of_test, data.lab_results.test_name, data.lab_results.test_result, data.lab_results.lab_recomandation);
    const treatment_plans = await db.run("INSERT INTO treatment_plans (patient_id, date_of_treatment, doctor_name, treatment) VALUES (?,?,?,?);", patient.lastID, data.treatment_plans.date_of_treatment, data.treatment_plans.doctor_name, data.treatment_plans.treatment);
    if (!patient || !medical_history || !medications || !vital_signs || !lab_results || !treatment_plans) {
      throw new AppError("Insert failed", 404);
    }
    return { patient, medical_history, medications, vital_signs, lab_results, treatment_plans };
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}


const updatePatientSymptoms = async (id, symptoms) => {
  try {
    const db = await dbPromise;
    const patient = await db.run("UPDATE patients SET symptoms_description = ? WHERE patient_id = ?;", symptoms, id);
    if (!patient) {
      throw new AppError("Update failed", 404);
    }
    return true;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

const updatePatientAiModelResponse = async (id, aiModelResponse) => {
  try {
    const db = await dbPromise;
    const patient = await db.run("UPDATE patients SET last_ai_model_response = ? WHERE patient_id = ?;", aiModelResponse, id);
    if (!patient) {
      throw new AppError("Update failed", 404);
    }
    return true;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

const getDoctors = async () => {
  try {
    const db = await dbPromise;
    const doctors = await db.all("SELECT * FROM doctors;");
    if (!doctors) {
      throw new AppError("Get doctors failed", 404);
    }
    return doctors;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

const addDoctor = async (data) => {
  try {
    const db = await dbPromise;
    const doctor = await db.run("INSERT INTO doctors (first_name, last_name, specialty, phone, email, license_number, hospital_affiliation, address, description, experience) VALUES (?,?,?,?,?,?,?,?,?,?);", data.first_name, data.last_name, data.specialty, data.phone, data.email, data.license_number, data.hospital_affiliation, data.address, data.description, data.experience);
    if (!doctor) {
      throw new AppError("Insert doctor failed", 404);
    }
    return doctor;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

const getDoctorInfo = async (id) => {
  try {
    const db = await dbPromise;
    const doctor = await db.get("SELECT * FROM doctors WHERE doctor_id = ?;", id);
    if (!doctor) {
      throw new AppError("Get doctor failed", 404);
    }
    return doctor;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

export default { updatePatientSymptoms, updatePatientAiModelResponse, getPatients, addDoctor, getAllPacientInfo, getDoctors, getDoctorInfo, addPacientAllData };
