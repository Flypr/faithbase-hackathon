import db from "./src/utils/dbFunctions.js";


// Patients data
//
const patientsData = [
  {
    patient: {
      first_name: "John",
      personal_numeric_number: 123456,
      last_name: "Doe",
      date_of_birth: "1985-05-15",
      gender: "Male",
      age: 38,
      blood_group: "A",
      phone: "+11234567890",
      email: "john.doe@example.com",
      symptoms_description: "Mild headache",
      patient_fo_number: 1001,
      last_ai_model_response: "No issues detected",
      address: "123 Main St"
    },
    medical_history: {
      diagnosis: "Hypertension",
      examination: "Blood Pressure Check",
      examination_date: "2023-10-01"
    },
    medications: {
      medication: "Lisinopril"
    },
    vital_signs: {
      heart_rate: "75",
      blood_pressure: "120/80",
      temperature: 98,
      blood_sugar: 90
    },
    lab_results: {
      date_of_test: "2023-09-15",
      test_name: "CBC",
      test_result: "Normal",
      lab_recomandation: "Routine monitoring recommended"
    },
    treatment_plans: {
      date_of_treatment: "2023-10-10",
      doctor_name: "Dr. Smith",
      treatment: "Continue Lisinopril, follow-up in 3 months"
    }
  },
  {
    patient: {
      first_name: "Jane",
      personal_numeric_number: 789012,
      last_name: "Smith",
      date_of_birth: "1990-08-25",
      gender: "Female",
      age: 33,
      blood_group: "O",
      phone: "+19876543210",
      email: "jane.smith@example.com",
      symptoms_description: "Cough and cold",
      patient_fo_number: 1002,
      last_ai_model_response: "Suggesting rest and fluids",
      address: "456 Elm St"
    },
    medical_history: {
      diagnosis: "Seasonal allergy",
      examination: "Nasal swab",
      examination_date: "2023-09-25"
    },
    medications: {
      medication: "Cetirizine"
    },
    vital_signs: {
      heart_rate: "82",
      blood_pressure: "118/76",
      temperature: 98,
      blood_sugar: 85
    },
    lab_results: {
      date_of_test: "2023-09-26",
      test_name: "Allergy Panel",
      test_result: "Positive for pollen",
      lab_recomandation: "Allergen avoidance recommended"
    },
    treatment_plans: {
      date_of_treatment: "2023-09-27",
      doctor_name: "Dr. Johnson",
      treatment: "Antihistamines and decongestants"
    }
  },
  {
    patient: {
      first_name: "Michael",
      personal_numeric_number: 345678,
      last_name: "Brown",
      date_of_birth: "1975-11-02",
      gender: "Male",
      age: 48,
      blood_group: "B",
      phone: "+11234987654",
      email: "michael.brown@example.com",
      symptoms_description: "Fatigue",
      patient_fo_number: 1003,
      last_ai_model_response: "No major issues",
      address: "789 Pine St"
    },
    medical_history: {
      diagnosis: "Diabetes Type 2",
      examination: "Blood glucose test",
      examination_date: "2023-10-05"
    },
    medications: {
      medication: "Metformin"
    },
    vital_signs: {
      heart_rate: "78",
      blood_pressure: "130/85",
      temperature: 98,
      blood_sugar: 110
    },
    lab_results: {
      date_of_test: "2023-10-06",
      test_name: "HbA1c",
      test_result: "6.5%",
      lab_recomandation: "Good control, monitor every 3 months"
    },
    treatment_plans: {
      date_of_treatment: "2023-10-10",
      doctor_name: "Dr. Davis",
      treatment: "Continue Metformin, lifestyle adjustments"
    }
  },
  {
    patient: {
      first_name: "Emma",
      personal_numeric_number: 112233,
      last_name: "Wilson",
      date_of_birth: "1988-02-17",
      gender: "Female",
      age: 35,
      blood_group: "A",
      phone: "+11234560001",
      email: "emma.wilson@example.com",
      symptoms_description: "Chronic back pain",
      patient_fo_number: 1004,
      last_ai_model_response: "Suggested physical therapy",
      address: "123 Oak St"
    },
    medical_history: {
      diagnosis: "Sciatica",
      examination: "MRI",
      examination_date: "2023-07-10"
    },
    medications: {
      medication: "Ibuprofen"
    },
    vital_signs: {
      heart_rate: "72",
      blood_pressure: "115/75",
      temperature: 98,
      blood_sugar: 90
    },
    lab_results: {
      date_of_test: "2023-07-11",
      test_name: "Blood Panel",
      test_result: "Normal",
      lab_recomandation: "Routine follow-up"
    },
    treatment_plans: {
      date_of_treatment: "2023-07-12",
      doctor_name: "Dr. Phillips",
      treatment: "Physical therapy twice weekly"
    }
  },
  {
    patient: {
      first_name: "Lucas",
      personal_numeric_number: 445566,
      last_name: "Anderson",
      date_of_birth: "1979-06-22",
      gender: "Male",
      age: 44,
      blood_group: "B",
      phone: "+11234560002",
      email: "lucas.anderson@example.com",
      symptoms_description: "Frequent urination",
      patient_fo_number: 1005,
      last_ai_model_response: "Diabetes screening",
      address: "456 Cedar St"
    },
    medical_history: {
      diagnosis: "Type 2 Diabetes",
      examination: "Fasting blood glucose test",
      examination_date: "2023-08-01"
    },
    medications: {
      medication: "Metformin"
    },
    vital_signs: {
      heart_rate: "80",
      blood_pressure: "130/88",
      temperature: 97,
      blood_sugar: 130
    },
    lab_results: {
      date_of_test: "2023-08-01",
      test_name: "HbA1c",
      test_result: "7.0%",
      lab_recomandation: "Regular monitoring required"
    },
    treatment_plans: {
      date_of_treatment: "2023-08-02",
      doctor_name: "Dr. Carter",
      treatment: "Diet and exercise, Metformin"
    }
  },
  {
    patient: {
      first_name: "Olivia",
      personal_numeric_number: 667788,
      last_name: "Thomas",
      date_of_birth: "1995-04-05",
      gender: "Female",
      age: 28,
      blood_group: "O",
      phone: "+11234560003",
      email: "olivia.thomas@example.com",
      symptoms_description: "Fatigue and dizziness",
      patient_fo_number: 1006,
      last_ai_model_response: "Suggesting iron supplements",
      address: "789 Maple St"
    },
    medical_history: {
      diagnosis: "Iron deficiency anemia",
      examination: "Blood test",
      examination_date: "2023-09-05"
    },
    medications: {
      medication: "Ferrous sulfate"
    },
    vital_signs: {
      heart_rate: "76",
      blood_pressure: "110/70",
      temperature: 98,
      blood_sugar: 80
    },
    lab_results: {
      date_of_test: "2023-09-06",
      test_name: "Iron levels",
      test_result: "Low",
      lab_recomandation: "Iron supplementation"
    },
    treatment_plans: {
      date_of_treatment: "2023-09-07",
      doctor_name: "Dr. Evans",
      treatment: "Iron supplements daily"
    }
  },
  {
    patient: {
      first_name: "James",
      personal_numeric_number: 991122,
      last_name: "Martinez",
      date_of_birth: "1983-03-29",
      gender: "Male",
      age: 40,
      blood_group: "AB",
      phone: "+11234560004",
      email: "james.martinez@example.com",
      symptoms_description: "Persistent knee pain",
      patient_fo_number: 1007,
      last_ai_model_response: "Recommended MRI",
      address: "101 Pine St"
    },
    medical_history: {
      diagnosis: "Osteoarthritis",
      examination: "Knee X-ray",
      examination_date: "2023-09-15"
    },
    medications: {
      medication: "Acetaminophen"
    },
    vital_signs: {
      heart_rate: "70",
      blood_pressure: "125/80",
      temperature: 98,
      blood_sugar: 95
    },
    lab_results: {
      date_of_test: "2023-09-16",
      test_name: "Joint analysis",
      test_result: "Signs of degeneration",
      lab_recomandation: "Follow-up for pain management"
    },
    treatment_plans: {
      date_of_treatment: "2023-09-17",
      doctor_name: "Dr. Reed",
      treatment: "Physical therapy and acetaminophen"
    }
  },
  {
    patient: {
      first_name: "Sophia",
      personal_numeric_number: 334455,
      last_name: "Garcia",
      date_of_birth: "1992-12-12",
      gender: "Female",
      age: 31,
      blood_group: "A",
      phone: "+11234560005",
      email: "sophia.garcia@example.com",
      symptoms_description: "Shortness of breath",
      patient_fo_number: 1008,
      last_ai_model_response: "EKG suggested",
      address: "202 Birch St"
    },
    medical_history: {
      diagnosis: "Asthma",
      examination: "Spirometry",
      examination_date: "2023-09-20"
    },
    medications: {
      medication: "Albuterol"
    },
    vital_signs: {
      heart_rate: "85",
      blood_pressure: "120/78",
      temperature: 98,
      blood_sugar: 85
    },
    lab_results: {
      date_of_test: "2023-09-21",
      test_name: "Lung Function Test",
      test_result: "Reduced capacity",
      lab_recomandation: "Regular inhaler use recommended"
    },
    treatment_plans: {
      date_of_treatment: "2023-09-22",
      doctor_name: "Dr. Baker",
      treatment: "Inhaler usage as needed"
    }
  },
  {
    patient: {
      first_name: "Liam",
      personal_numeric_number: 778899,
      last_name: "Johnson",
      date_of_birth: "1980-09-14",
      gender: "Male",
      age: 43,
      blood_group: "O",
      phone: "+11234560006",
      email: "liam.johnson@example.com",
      symptoms_description: "Occasional chest pain",
      patient_fo_number: 1009,
      last_ai_model_response: "Possible angina",
      address: "303 Cedar St"
    },
    medical_history: {
      diagnosis: "Hypertension",
      examination: "ECG",
      examination_date: "2023-09-30"
    },
    medications: {
      medication: "Lisinopril"
    },
    vital_signs: {
      heart_rate: "78",
      blood_pressure: "140/90",
      temperature: 97,
      blood_sugar: 90
    },
    lab_results: {
      date_of_test: "2023-10-01",
      test_name: "Lipid panel",
      test_result: "Elevated LDL",
      lab_recomandation: "Diet modification advised"
    },
    treatment_plans: {
      date_of_treatment: "2023-10-02",
      doctor_name: "Dr. Clark",
      treatment: "medication and lifestyle changes"
    }
  },
  // 7th patient
  {
    patient: {
      first_name: "Mason",
      personal_numeric_number: 990001,
      last_name: "Harris",
      date_of_birth: "1976-11-03",
      gender: "Male",
      age: 47,
      blood_group: "B",
      phone: "+11234560007",
      email: "mason.harris@example.com",
      symptoms_description: "Lower back pain",
      patient_fo_number: 1010,
      last_ai_model_response: "Physical therapy suggested",
      address: "404 Oak St"
    },
    medical_history: {
      diagnosis: "Degenerative disc disease",
      examination: "MRI",
      examination_date: "2023-10-04"
    },
    medications: {
      medication: "Acetaminophen"
    },
    vital_signs: {
      heart_rate: "72",
      blood_pressure: "118/76",
      temperature: 98,
      blood_sugar: 88
    },
    lab_results: {
      date_of_test: "2023-10-05",
      test_name: "Calcium levels",
      test_result: "Normal",
      lab_recomandation: "Continue with PT"
    },
    treatment_plans: {
      date_of_treatment: "2023-10-06",
      doctor_name: "Dr. Miller",
      treatment: "Weekly PT sessions"
    }
  },
  // 8th patient
  {
    patient: {
      first_name: "Ava",
      personal_numeric_number: 110022,
      last_name: "Scott",
      date_of_birth: "1993-07-20",
      gender: "Female",
      age: 30,
      blood_group: "A",
      phone: "+11234560008",
      email: "ava.scott@example.com",
      symptoms_description: "Frequent migraines",
      patient_fo_number: 1011,
      last_ai_model_response: "Suggesting neurologist consult",
      address: "505 Maple St"
    },
    medical_history: {
      diagnosis: "Migraine",
      examination: "CT scan",
      examination_date: "2023-10-08"
    },
    medications: {
      medication: "Sumatriptan"
    },
    vital_signs: {
      heart_rate: "74",
      blood_pressure: "110/72",
      temperature: 97,
      blood_sugar: 85
    },
    lab_results: {
      date_of_test: "2023-10-09",
      test_name: "Neurological assessment",
      test_result: "Normal",
      lab_recomandation: "medication adjustment"
    },
    treatment_plans: {
      date_of_treatment: "2023-10-10",
      doctor_name: "Dr. Parker",
      treatment: "medication adjustment"
    }
  },
  // 9th patient
  {
    patient: {
      first_name: "Charlotte",
      personal_numeric_number: 220033,
      last_name: "Davis",
      date_of_birth: "1965-12-11",
      gender: "Female",
      age: 58,
      blood_group: "AB",
      phone: "+11234560009",
      email: "charlotte.davis@example.com",
      symptoms_description: "Chronic joint pain",
      patient_fo_number: 1012,
      last_ai_model_response: "RA suggested",
      address: "606 Birch St"
    },
    medical_history: {
      diagnosis: "Rheumatoid Arthritis",
      examination: "Rheumatology panel",
      examination_date: "2023-10-12"
    },
    medications: {
      medication: "Methotrexate"
    },
    vital_signs: {
      heart_rate: "75",
      blood_pressure: "130/85",
      temperature: 98,
      blood_sugar: 92
    },
    lab_results: {
      date_of_test: "2023-10-13",
      test_name: "CRP",
      test_result: "Elevated",
      lab_recomandation: "medication adherence"
    },
    treatment_plans: {
      date_of_treatment: "2023-10-14",
      doctor_name: "Dr. Nelson",
      treatment: "Weekly injection"
    }
  },
  // 10th patient
  {
    patient: {
      first_name: "Amelia",
      personal_numeric_number: 550066,
      last_name: "Brown",
      date_of_birth: "1990-02-25",
      gender: "Female",
      age: 33,
      blood_group: "B",
      phone: "+11234560010",
      email: "amelia.brown@example.com",
      symptoms_description: "Fatigue and palpitations",
      patient_fo_number: 1013,
      last_ai_model_response: "Thyroid function test",
      address: "707 Pine St"
    },
    medical_history: {
      diagnosis: "Hypothyroidism",
      examination: "TSH test",
      examination_date: "2023-10-16"
    },
    medications: {
      medication: "Levothyroxine"
    },
    vital_signs: {
      heart_rate: "70",
      blood_pressure: "115/75",
      temperature: 98,
      blood_sugar: 92
    },
    lab_results: {
      date_of_test: "2023-10-17",
      test_name: "Thyroid levels",
      test_result: "Low T3",
      lab_recomandation: "Monitor and adjust dose"
    },
    treatment_plans: {
      date_of_treatment: "2023-10-18",
      doctor_name: "Dr. Simmons",
      treatment: "Dose adjustment"
    }
  },
];

const doctorsData = [
  {
    first_name: "John",
    last_name: "Doe",
    specialty: "Cardiology",
    phone: "+11234567890",
    email: "john.doe@example.com",
    license_number: "LIC123456",
    hospital_affiliation: "City Hospital",
    address: "123 Heart Lane",
    decription: "Experienced in treating complex cardiac conditions.",
    experience: 15
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    specialty: "Pediatrics",
    phone: "+11234567891",
    email: "jane.smith@example.com",
    license_number: "LIC123457",
    hospital_affiliation: "Children's Health Center",
    address: "456 Kid Ave",
    decription: "Specializes in child health and preventive care.",
    experience: 12
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    specialty: "Dermatology",
    phone: "+11234567892",
    email: "emily.brown@example.com",
    license_number: "LIC123458",
    hospital_affiliation: "Skin Health Clinic",
    address: "789 Skin Rd",
    decription: "Expert in skin conditions and cosmetic procedures.",
    experience: 10
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    specialty: "Orthopedics",
    phone: "+11234567893",
    email: "michael.johnson@example.com",
    license_number: "LIC123459",
    hospital_affiliation: "Orthopedic Center",
    address: "101 Joint St",
    decription: "Focuses on bone and joint surgeries.",
    experience: 18
  },
  {
    first_name: "Linda",
    last_name: "Martinez",
    specialty: "Neurology",
    phone: "+11234567894",
    email: "linda.martinez@example.com",
    license_number: "LIC123460",
    hospital_affiliation: "Brain Health Hospital",
    address: "202 Nerve Blvd",
    decription: "Specialized in neurological disorders and treatments.",
    experience: 20
  },
  {
    first_name: "David",
    last_name: "Lee",
    specialty: "Endocrinology",
    phone: "+11234567895",
    email: "david.lee@example.com",
    license_number: "LIC123461",
    hospital_affiliation: "Metabolic Institute",
    address: "303 Hormone Ave",
    decription: "Expert in diabetes and hormone imbalances.",
    experience: 14
  },
  {
    first_name: "Sophia",
    last_name: "Garcia",
    specialty: "Gastroenterology",
    phone: "+11234567896",
    email: "sophia.garcia@example.com",
    license_number: "LIC123462",
    hospital_affiliation: "Digestive Health Clinic",
    address: "404 Stomach St",
    decription: "Focused on digestive disorders and liver disease.",
    experience: 17
  },
  {
    first_name: "James",
    last_name: "Wilson",
    specialty: "Psychiatry",
    phone: "+11234567897",
    email: "james.wilson@example.com",
    license_number: "LIC123463",
    hospital_affiliation: "Mental Health Center",
    address: "505 Mind Dr",
    decription: "Experienced in treating mental health conditions.",
    experience: 22
  },
  {
    first_name: "Olivia",
    last_name: "Thomas",
    specialty: "Oncology",
    phone: "+11234567898",
    email: "olivia.thomas@example.com",
    license_number: "LIC123464",
    hospital_affiliation: "Cancer Care Hospital",
    address: "606 Cancer Ln",
    decription: "Specialist in cancer treatment and research.",
    experience: 11
  },
  {
    first_name: "Benjamin",
    last_name: "Clark",
    specialty: "General Surgery",
    phone: "+11234567899",
    email: "benjamin.clark@example.com",
    license_number: "LIC123465",
    hospital_affiliation: "General Hospital",
    address: "707 Surgery St",
    decription: "Experienced in a wide range of surgical procedures.",
    experience: 16
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

addDataIntoDatabase(patientsData);
addDoctorsIntoDatabase(doctorsData);

