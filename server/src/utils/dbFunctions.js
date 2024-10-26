import dbPromise from "./dbPromise.js";
import { AppError } from "../middleware/errorHandler.js";


const getPacients = async () => {
  try {
    const db = await dbPromise;
    const pacients = await db.all("SELECT * FROM Pacients;");
    return pacients;
  } catch (error) {
    console.log(error);
  }
  throw new AppError("Database error", 500, "There is an issue with the database dbPromise constructor", true);
}

const getAllPacientInfo = async (id) => {
  try {
    const db = await dbPromise;
    const pacients = await db.all("SELECT p.Patient_id, p.First_name, p.Last_name, p.Personal_numeric_number, p.Date_of_birth, p.Gender, p.Age, p.Blood_group, p.Phone, p.Email, p.Symptoms_descriprtion, p.Patient_fo_number, p.Last_ai_model_response, p.Address, mh.Diagnosis AS Medical_Diagnosis, mh.Examination AS Examination, mh.Examination_date AS Examination_Date, m.Medication AS Prescribed_Medication, vs.Heart_rate, vs.Blood_pressure, vs.Temperature, vs.Blood_sugar, lr.Date_of_test AS Date_of_Test, lr.Test_name, lr.Test_result, lr.Lab_recomandation AS Lab_Recommendation, ai.Response AS AI_Model_Response FROM Patients p LEFT JOIN Medical_history mh ON p.Patient_id = mh.Patient_id LEFT JOIN Medications m ON p.Patient_id = m.Patient_id LEFT JOIN Vital_signs vs ON p.Patient_id = vs.Patient_id LEFT JOIN Lab_results lr ON p.Patient_id = lr.Patient_id LEFT JOIN Ai_model_responses ai ON p.Patient_id = ai.Patient_id WHERE p.Patient_id = ?;", id);
    return pacients;
  } catch (error) {
    console.log(error);
  }
  throw new AppError("Database error", 500, "There is an issue with the database dbPromise constructor", true);
}

export default { getPacients, getAllPacientInfo };
