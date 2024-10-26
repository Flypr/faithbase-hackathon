import dbPromise from "../middleware/database.js";
import { AppError } from "../middleware/errorHandler.js";


const getPatients = async () => {
  try {
    const db = await dbPromise;
    const patients = await db.all("SELECT * FROM Patients;");
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
    const pacient = await db.get("SELECT p.Patient_id, p.First_name, p.Last_name, p.Personal_numeric_number, p.Date_of_birth, p.Gender, p.Age, p.Blood_group, p.Phone, p.Email, p.Symptoms_description, p.Patient_fo_number, p.Last_ai_model_response, p.Address, mh.Diagnosis AS Medical_Diagnosis, mh.Examination AS Examination, mh.Examination_date AS Examination_Date, m.Medication AS Prescribed_Medication, vs.Heart_rate, vs.Blood_pressure, vs.Temperature, vs.Blood_sugar, lr.Date_of_test AS Date_of_Test, lr.Test_name, lr.Test_result, lr.Lab_recomandation AS Lab_Recommendation FROM Patients p LEFT JOIN Medical_history mh ON p.Patient_id = mh.Patient_id LEFT JOIN Medications m ON p.Patient_id = m.Patient_id LEFT JOIN Vital_signs vs ON p.Patient_id = vs.Patient_id LEFT JOIN Lab_results lr ON p.Patient_id = lr.Patient_id WHERE p.Patient_id = ?;", id);
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
    const patient = await db.run("INSERT INTO Patients (First_name, Personal_numeric_number, Last_name, Date_of_birth, Gender, Age, Blood_group, Phone, Email, Symptoms_description, Patient_fo_number, Last_ai_model_response, Address) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);", data.Patient.First_name, data.Patient.Personal_numeric_number, data.Patient.Last_name, data.Patient.Date_of_birth, data.Patient.Gender, data.Patient.Age, data.Patient.Blood_group, data.Patient.Phone, data.Patient.Email, data.Patient.Symptoms_description, data.Patient.Patient_fo_number, data.Patient.Last_ai_model_response, data.Patient.Address);
    const medical_history = await db.run("Insert INTO Medical_history (Patient_id, Diagnosis, Examination, Examination_date) VALUES (?,?,?,?);", patient.lastID, data.Medical_history.Diagnosis, data.Medical_history.Examination, data.Medical_history.Examination_date);
    const medications = await db.run("INSERT INTO Medications (Patient_id, Medication) VALUES (?,?);", patient.lastID, data.Medications.Medication);
    const vital_signs = await db.run("INSERT INTO Vital_signs (Patient_id, Heart_rate, Blood_pressure, Temperature, Blood_sugar) VALUES (?,?,?,?,?);", patient.lastID, data.Vital_signs.Heart_rate, data.Vital_signs.Blood_pressure, data.Vital_signs.Temperature, data.Vital_signs.Blood_sugar);
    const lab_results = await db.run("INSERT INTO Lab_results (Patient_id, Date_of_test, Test_name, Test_result, Lab_recomandation) VALUES (?,?,?,?,?);", patient.lastID, data.Lab_results.Date_of_test, data.Lab_results.Test_name, data.Lab_results.Test_result, data.Lab_results.Lab_recomandation);
    const treatment_plans = await db.run("INSERT INTO Treatment_plans (Patient_id, Date_of_treatment, Doctor_name, Treatment) VALUES (?,?,?,?);", patient.lastID, data.Treatment_plans.Date_of_treatment, data.Treatment_plans.Doctor_name, data.Treatment_plans.Treatment);
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
    const patient = await db.run("UPDATE Patients SET Symptoms_description = ? WHERE Patient_id = ?;", symptoms, id);
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
    const patient = await db.run("UPDATE Patients SET Last_ai_model_response = ? WHERE Patient_id = ?;", aiModelResponse, id);
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
    const doctors = await db.all("SELECT * FROM Doctors;");
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
    const doctor = await db.run("INSERT INTO Doctors (First_name, Last_name, Specialty, Phone, Email, License_number, Hospital_affiliation, Address, Description, Experience) VALUES (?,?,?,?,?,?,?,?,?,?);", data.First_name, data.Last_name, data.Specialty, data.Phone, data.Email, data.License_number, data.Hospital_affiliation, data.Address, data.Description, data.Experience);
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
    const doctor = await db.get("SELECT * FROM Doctors WHERE Doctor_id = ?;", id);
    if (!doctor) {
      throw new AppError("Get doctor failed", 404);
    }
    return doctor;
  } catch (error) {
    throw new AppError("Database error", 500, error, true);
  }
}

export default { updatePatientSymptoms, updatePatientAiModelResponse, getPatients, addDoctor, getAllPacientInfo, getDoctors, getDoctorInfo, addPacientAllData };
