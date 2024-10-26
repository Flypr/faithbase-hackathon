//TODO: Add data for doctors schema -> use the function from dbFunctions.js
//TODO : Add data for patients schema -> use the function from dbFunctions.js
import db from "./src/utils/dbFunctions.js";


// Patients data
//
const patientsData = [
  {
    Patient: {
      First_name: "John",
      Personal_numeric_number: 123456,
      Last_name: "Doe",
      Date_of_birth: "1985-05-15",
      Gender: "Male",
      Age: 38,
      Blood_group: "A",
      Phone: "+11234567890",
      Email: "john.doe@example.com",
      Symptoms_descriprtion: "Mild headache",
      Patient_fo_number: 1001,
      Last_ai_model_response: "No issues detected",
      Address: "123 Main St"
    },
    Medical_history: {
      Diagnosis: "Hypertension",
      Examination: "Blood Pressure Check",
      Examination_date: "2023-10-01"
    },
    Medications: {
      Medication: "Lisinopril"
    },
    Vital_signs: {
      Heart_rate: "75",
      Blood_pressure: "120/80",
      Temperature: 98,
      Blood_sugar: 90
    },
    Lab_results: {
      Date_of_test: "2023-09-15",
      Test_name: "CBC",
      Test_result: "Normal",
      Lab_recomandation: "Routine monitoring recommended"
    },
    Treatment_plans: {
      Date_of_treatment: "2023-10-10",
      Doctor_name: "Dr. Smith",
      Treatment: "Continue Lisinopril, follow-up in 3 months"
    }
  },
  {
    Patient: {
      First_name: "Jane",
      Personal_numeric_number: 789012,
      Last_name: "Smith",
      Date_of_birth: "1990-08-25",
      Gender: "Female",
      Age: 33,
      Blood_group: "O",
      Phone: "+19876543210",
      Email: "jane.smith@example.com",
      Symptoms_descriprtion: "Cough and cold",
      Patient_fo_number: 1002,
      Last_ai_model_response: "Suggesting rest and fluids",
      Address: "456 Elm St"
    },
    Medical_history: {
      Diagnosis: "Seasonal allergy",
      Examination: "Nasal swab",
      Examination_date: "2023-09-25"
    },
    Medications: {
      Medication: "Cetirizine"
    },
    Vital_signs: {
      Heart_rate: "82",
      Blood_pressure: "118/76",
      Temperature: 98,
      Blood_sugar: 85
    },
    Lab_results: {
      Date_of_test: "2023-09-26",
      Test_name: "Allergy Panel",
      Test_result: "Positive for pollen",
      Lab_recomandation: "Allergen avoidance recommended"
    },
    Treatment_plans: {
      Date_of_treatment: "2023-09-27",
      Doctor_name: "Dr. Johnson",
      Treatment: "Antihistamines and decongestants"
    }
  },
  {
    Patient: {
      First_name: "Michael",
      Personal_numeric_number: 345678,
      Last_name: "Brown",
      Date_of_birth: "1975-11-02",
      Gender: "Male",
      Age: 48,
      Blood_group: "B",
      Phone: "+11234987654",
      Email: "michael.brown@example.com",
      Symptoms_descriprtion: "Fatigue",
      Patient_fo_number: 1003,
      Last_ai_model_response: "No major issues",
      Address: "789 Pine St"
    },
    Medical_history: {
      Diagnosis: "Diabetes Type 2",
      Examination: "Blood glucose test",
      Examination_date: "2023-10-05"
    },
    Medications: {
      Medication: "Metformin"
    },
    Vital_signs: {
      Heart_rate: "78",
      Blood_pressure: "130/85",
      Temperature: 98,
      Blood_sugar: 110
    },
    Lab_results: {
      Date_of_test: "2023-10-06",
      Test_name: "HbA1c",
      Test_result: "6.5%",
      Lab_recomandation: "Good control, monitor every 3 months"
    },
    Treatment_plans: {
      Date_of_treatment: "2023-10-10",
      Doctor_name: "Dr. Davis",
      Treatment: "Continue Metformin, lifestyle adjustments"
    }
  },
  {
    Patient: {
      First_name: "Emma",
      Personal_numeric_number: 112233,
      Last_name: "Wilson",
      Date_of_birth: "1988-02-17",
      Gender: "Female",
      Age: 35,
      Blood_group: "A",
      Phone: "+11234560001",
      Email: "emma.wilson@example.com",
      Symptoms_descriprtion: "Chronic back pain",
      Patient_fo_number: 1004,
      Last_ai_model_response: "Suggested physical therapy",
      Address: "123 Oak St"
    },
    Medical_history: {
      Diagnosis: "Sciatica",
      Examination: "MRI",
      Examination_date: "2023-07-10"
    },
    Medications: {
      Medication: "Ibuprofen"
    },
    Vital_signs: {
      Heart_rate: "72",
      Blood_pressure: "115/75",
      Temperature: 98,
      Blood_sugar: 90
    },
    Lab_results: {
      Date_of_test: "2023-07-11",
      Test_name: "Blood Panel",
      Test_result: "Normal",
      Lab_recomandation: "Routine follow-up"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-07-12",
      Doctor_name: "Dr. Phillips",
      Treatment: "Physical therapy twice weekly"
    }
  },
  {
    Patient: {
      First_name: "Lucas",
      Personal_numeric_number: 445566,
      Last_name: "Anderson",
      Date_of_birth: "1979-06-22",
      Gender: "Male",
      Age: 44,
      Blood_group: "B",
      Phone: "+11234560002",
      Email: "lucas.anderson@example.com",
      Symptoms_descriprtion: "Frequent urination",
      Patient_fo_number: 1005,
      Last_ai_model_response: "Diabetes screening",
      Address: "456 Cedar St"
    },
    Medical_history: {
      Diagnosis: "Type 2 Diabetes",
      Examination: "Fasting blood glucose test",
      Examination_date: "2023-08-01"
    },
    Medications: {
      Medication: "Metformin"
    },
    Vital_signs: {
      Heart_rate: "80",
      Blood_pressure: "130/88",
      Temperature: 97,
      Blood_sugar: 130
    },
    Lab_results: {
      Date_of_test: "2023-08-01",
      Test_name: "HbA1c",
      Test_result: "7.0%",
      Lab_recomandation: "Regular monitoring required"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-08-02",
      Doctor_name: "Dr. Carter",
      Treatment: "Diet and exercise, Metformin"
    }
  },
  {
    Patient: {
      First_name: "Olivia",
      Personal_numeric_number: 667788,
      Last_name: "Thomas",
      Date_of_birth: "1995-04-05",
      Gender: "Female",
      Age: 28,
      Blood_group: "O",
      Phone: "+11234560003",
      Email: "olivia.thomas@example.com",
      Symptoms_descriprtion: "Fatigue and dizziness",
      Patient_fo_number: 1006,
      Last_ai_model_response: "Suggesting iron supplements",
      Address: "789 Maple St"
    },
    Medical_history: {
      Diagnosis: "Iron deficiency anemia",
      Examination: "Blood test",
      Examination_date: "2023-09-05"
    },
    Medications: {
      Medication: "Ferrous sulfate"
    },
    Vital_signs: {
      Heart_rate: "76",
      Blood_pressure: "110/70",
      Temperature: 98,
      Blood_sugar: 80
    },
    Lab_results: {
      Date_of_test: "2023-09-06",
      Test_name: "Iron levels",
      Test_result: "Low",
      Lab_recomandation: "Iron supplementation"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-09-07",
      Doctor_name: "Dr. Evans",
      Treatment: "Iron supplements daily"
    }
  },
  {
    Patient: {
      First_name: "James",
      Personal_numeric_number: 991122,
      Last_name: "Martinez",
      Date_of_birth: "1983-03-29",
      Gender: "Male",
      Age: 40,
      Blood_group: "AB",
      Phone: "+11234560004",
      Email: "james.martinez@example.com",
      Symptoms_descriprtion: "Persistent knee pain",
      Patient_fo_number: 1007,
      Last_ai_model_response: "Recommended MRI",
      Address: "101 Pine St"
    },
    Medical_history: {
      Diagnosis: "Osteoarthritis",
      Examination: "Knee X-ray",
      Examination_date: "2023-09-15"
    },
    Medications: {
      Medication: "Acetaminophen"
    },
    Vital_signs: {
      Heart_rate: "70",
      Blood_pressure: "125/80",
      Temperature: 98,
      Blood_sugar: 95
    },
    Lab_results: {
      Date_of_test: "2023-09-16",
      Test_name: "Joint analysis",
      Test_result: "Signs of degeneration",
      Lab_recomandation: "Follow-up for pain management"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-09-17",
      Doctor_name: "Dr. Reed",
      Treatment: "Physical therapy and acetaminophen"
    }
  },
  {
    Patient: {
      First_name: "Sophia",
      Personal_numeric_number: 334455,
      Last_name: "Garcia",
      Date_of_birth: "1992-12-12",
      Gender: "Female",
      Age: 31,
      Blood_group: "A",
      Phone: "+11234560005",
      Email: "sophia.garcia@example.com",
      Symptoms_descriprtion: "Shortness of breath",
      Patient_fo_number: 1008,
      Last_ai_model_response: "EKG suggested",
      Address: "202 Birch St"
    },
    Medical_history: {
      Diagnosis: "Asthma",
      Examination: "Spirometry",
      Examination_date: "2023-09-20"
    },
    Medications: {
      Medication: "Albuterol"
    },
    Vital_signs: {
      Heart_rate: "85",
      Blood_pressure: "120/78",
      Temperature: 98,
      Blood_sugar: 85
    },
    Lab_results: {
      Date_of_test: "2023-09-21",
      Test_name: "Lung Function Test",
      Test_result: "Reduced capacity",
      Lab_recomandation: "Regular inhaler use recommended"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-09-22",
      Doctor_name: "Dr. Baker",
      Treatment: "Inhaler usage as needed"
    }
  },
  {
    Patient: {
      First_name: "Liam",
      Personal_numeric_number: 778899,
      Last_name: "Johnson",
      Date_of_birth: "1980-09-14",
      Gender: "Male",
      Age: 43,
      Blood_group: "O",
      Phone: "+11234560006",
      Email: "liam.johnson@example.com",
      Symptoms_descriprtion: "Occasional chest pain",
      Patient_fo_number: 1009,
      Last_ai_model_response: "Possible angina",
      Address: "303 Cedar St"
    },
    Medical_history: {
      Diagnosis: "Hypertension",
      Examination: "ECG",
      Examination_date: "2023-09-30"
    },
    Medications: {
      Medication: "Lisinopril"
    },
    Vital_signs: {
      Heart_rate: "78",
      Blood_pressure: "140/90",
      Temperature: 97,
      Blood_sugar: 90
    },
    Lab_results: {
      Date_of_test: "2023-10-01",
      Test_name: "Lipid panel",
      Test_result: "Elevated LDL",
      Lab_recomandation: "Diet modification advised"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-10-02",
      Doctor_name: "Dr. Clark",
      Treatment: "Medication and lifestyle changes"
    }
  },
  // 7th Patient
  {
    Patient: {
      First_name: "Mason",
      Personal_numeric_number: 990001,
      Last_name: "Harris",
      Date_of_birth: "1976-11-03",
      Gender: "Male",
      Age: 47,
      Blood_group: "B",
      Phone: "+11234560007",
      Email: "mason.harris@example.com",
      Symptoms_descriprtion: "Lower back pain",
      Patient_fo_number: 1010,
      Last_ai_model_response: "Physical therapy suggested",
      Address: "404 Oak St"
    },
    Medical_history: {
      Diagnosis: "Degenerative disc disease",
      Examination: "MRI",
      Examination_date: "2023-10-04"
    },
    Medications: {
      Medication: "Acetaminophen"
    },
    Vital_signs: {
      Heart_rate: "72",
      Blood_pressure: "118/76",
      Temperature: 98,
      Blood_sugar: 88
    },
    Lab_results: {
      Date_of_test: "2023-10-05",
      Test_name: "Calcium levels",
      Test_result: "Normal",
      Lab_recomandation: "Continue with PT"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-10-06",
      Doctor_name: "Dr. Miller",
      Treatment: "Weekly PT sessions"
    }
  },
  // 8th Patient
  {
    Patient: {
      First_name: "Ava",
      Personal_numeric_number: 110022,
      Last_name: "Scott",
      Date_of_birth: "1993-07-20",
      Gender: "Female",
      Age: 30,
      Blood_group: "A",
      Phone: "+11234560008",
      Email: "ava.scott@example.com",
      Symptoms_descriprtion: "Frequent migraines",
      Patient_fo_number: 1011,
      Last_ai_model_response: "Suggesting neurologist consult",
      Address: "505 Maple St"
    },
    Medical_history: {
      Diagnosis: "Migraine",
      Examination: "CT scan",
      Examination_date: "2023-10-08"
    },
    Medications: {
      Medication: "Sumatriptan"
    },
    Vital_signs: {
      Heart_rate: "74",
      Blood_pressure: "110/72",
      Temperature: 97,
      Blood_sugar: 85
    },
    Lab_results: {
      Date_of_test: "2023-10-09",
      Test_name: "Neurological assessment",
      Test_result: "Normal",
      Lab_recomandation: "Medication adjustment"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-10-10",
      Doctor_name: "Dr. Parker",
      Treatment: "Medication adjustment"
    }
  },
  // 9th Patient
  {
    Patient: {
      First_name: "Charlotte",
      Personal_numeric_number: 220033,
      Last_name: "Davis",
      Date_of_birth: "1965-12-11",
      Gender: "Female",
      Age: 58,
      Blood_group: "AB",
      Phone: "+11234560009",
      Email: "charlotte.davis@example.com",
      Symptoms_descriprtion: "Chronic joint pain",
      Patient_fo_number: 1012,
      Last_ai_model_response: "RA suggested",
      Address: "606 Birch St"
    },
    Medical_history: {
      Diagnosis: "Rheumatoid Arthritis",
      Examination: "Rheumatology panel",
      Examination_date: "2023-10-12"
    },
    Medications: {
      Medication: "Methotrexate"
    },
    Vital_signs: {
      Heart_rate: "75",
      Blood_pressure: "130/85",
      Temperature: 98,
      Blood_sugar: 92
    },
    Lab_results: {
      Date_of_test: "2023-10-13",
      Test_name: "CRP",
      Test_result: "Elevated",
      Lab_recomandation: "Medication adherence"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-10-14",
      Doctor_name: "Dr. Nelson",
      Treatment: "Weekly injection"
    }
  },
  // 10th Patient
  {
    Patient: {
      First_name: "Amelia",
      Personal_numeric_number: 550066,
      Last_name: "Brown",
      Date_of_birth: "1990-02-25",
      Gender: "Female",
      Age: 33,
      Blood_group: "B",
      Phone: "+11234560010",
      Email: "amelia.brown@example.com",
      Symptoms_descriprtion: "Fatigue and palpitations",
      Patient_fo_number: 1013,
      Last_ai_model_response: "Thyroid function test",
      Address: "707 Pine St"
    },
    Medical_history: {
      Diagnosis: "Hypothyroidism",
      Examination: "TSH test",
      Examination_date: "2023-10-16"
    },
    Medications: {
      Medication: "Levothyroxine"
    },
    Vital_signs: {
      Heart_rate: "70",
      Blood_pressure: "115/75",
      Temperature: 98,
      Blood_sugar: 92
    },
    Lab_results: {
      Date_of_test: "2023-10-17",
      Test_name: "Thyroid levels",
      Test_result: "Low T3",
      Lab_recomandation: "Monitor and adjust dose"
    },
    Tratament_plans: {
      Date_of_treatment: "2023-10-18",
      Doctor_name: "Dr. Simmons",
      Treatment: "Dose adjustment"
    }
  },
];

const doctorsData = [
  {
    First_name: "John",
    Last_name: "Doe",
    Specialty: "Cardiology",
    Phone: "+11234567890",
    Email: "john.doe@example.com",
    License_number: "LIC123456",
    Hospital_affiliation: "City Hospital",
    Address: "123 Heart Lane",
    Description: "Experienced in treating complex cardiac conditions.",
    Experience: 15
  },
  {
    First_name: "Jane",
    Last_name: "Smith",
    Specialty: "Pediatrics",
    Phone: "+11234567891",
    Email: "jane.smith@example.com",
    License_number: "LIC123457",
    Hospital_affiliation: "Children's Health Center",
    Address: "456 Kid Ave",
    Description: "Specializes in child health and preventive care.",
    Experience: 12
  },
  {
    First_name: "Emily",
    Last_name: "Brown",
    Specialty: "Dermatology",
    Phone: "+11234567892",
    Email: "emily.brown@example.com",
    License_number: "LIC123458",
    Hospital_affiliation: "Skin Health Clinic",
    Address: "789 Skin Rd",
    Description: "Expert in skin conditions and cosmetic procedures.",
    Experience: 10
  },
  {
    First_name: "Michael",
    Last_name: "Johnson",
    Specialty: "Orthopedics",
    Phone: "+11234567893",
    Email: "michael.johnson@example.com",
    License_number: "LIC123459",
    Hospital_affiliation: "Orthopedic Center",
    Address: "101 Joint St",
    Description: "Focuses on bone and joint surgeries.",
    Experience: 18
  },
  {
    First_name: "Linda",
    Last_name: "Martinez",
    Specialty: "Neurology",
    Phone: "+11234567894",
    Email: "linda.martinez@example.com",
    License_number: "LIC123460",
    Hospital_affiliation: "Brain Health Hospital",
    Address: "202 Nerve Blvd",
    Description: "Specialized in neurological disorders and treatments.",
    Experience: 20
  },
  {
    First_name: "David",
    Last_name: "Lee",
    Specialty: "Endocrinology",
    Phone: "+11234567895",
    Email: "david.lee@example.com",
    License_number: "LIC123461",
    Hospital_affiliation: "Metabolic Institute",
    Address: "303 Hormone Ave",
    Description: "Expert in diabetes and hormone imbalances.",
    Experience: 14
  },
  {
    First_name: "Sophia",
    Last_name: "Garcia",
    Specialty: "Gastroenterology",
    Phone: "+11234567896",
    Email: "sophia.garcia@example.com",
    License_number: "LIC123462",
    Hospital_affiliation: "Digestive Health Clinic",
    Address: "404 Stomach St",
    Description: "Focused on digestive disorders and liver disease.",
    Experience: 17
  },
  {
    First_name: "James",
    Last_name: "Wilson",
    Specialty: "Psychiatry",
    Phone: "+11234567897",
    Email: "james.wilson@example.com",
    License_number: "LIC123463",
    Hospital_affiliation: "Mental Health Center",
    Address: "505 Mind Dr",
    Description: "Experienced in treating mental health conditions.",
    Experience: 22
  },
  {
    First_name: "Olivia",
    Last_name: "Thomas",
    Specialty: "Oncology",
    Phone: "+11234567898",
    Email: "olivia.thomas@example.com",
    License_number: "LIC123464",
    Hospital_affiliation: "Cancer Care Hospital",
    Address: "606 Cancer Ln",
    Description: "Specialist in cancer treatment and research.",
    Experience: 11
  },
  {
    First_name: "Benjamin",
    Last_name: "Clark",
    Specialty: "General Surgery",
    Phone: "+11234567899",
    Email: "benjamin.clark@example.com",
    License_number: "LIC123465",
    Hospital_affiliation: "General Hospital",
    Address: "707 Surgery St",
    Description: "Experienced in a wide range of surgical procedures.",
    Experience: 16
  }
];


const addDataIntoDatabase = async (dataToInsert) => {
  try {
    for (const data of dataToInsert) {
      await db.addPacientAllData(data);
    }
  } catch (error) {
    console.log(error);
  }
}

const addDoctorsIntoDatabase = async (dataToInsert) => {
  try {
    for (const data of dataToInsert) {
      await db.addDoctor(data);
    }
  } catch (error) {
    console.log(error);
  }
}

//addDataIntoDatabase(patientsData);
//addDoctorsIntoDatabase(doctorsData);

