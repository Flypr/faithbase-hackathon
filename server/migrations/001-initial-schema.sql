-- Up

CREATE TABLE patients (
    patient_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    personal_numeric_number INTEGER NOT NULL,
    last_name TEXT NOT NULL,
    date_of_birth TEXT NOT NULL,
    gender TEXT,
    age INTEGER,
    blood_group TEXT,
    phone TEXT,
    email TEXT,
    symptoms_description TEXT,
    patient_fo_number INTEGER,
    last_ai_model_response TEXT NOT NULL,
    address TEXT NOT NULL
);


CREATE TABLE medical_history (
    medical_history_id INTEGER PRIMARY KEY,
    patient_id INTEGER NOT NULL,
    diagnosis TEXT NOT NULL,
    examination TEXT NOT NULL,
    examination_date TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients (patient_id)
);

CREATE TABLE medications (
    medication_id INTEGER PRIMARY KEY,
    patient_id INTEGER NOT NULL,
    medication TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients (patient_id)
);

CREATE TABLE vital_signs (
    vital_sign_id INTEGER PRIMARY KEY,
    patient_id INTEGER NOT NULL,
    heart_rate TEXT NOT NULL,
    blood_pressure TEXT NOT NULL,
    temperature INTEGER NOT NULL,
    blood_sugar INTEGER NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients (patient_id)
);

CREATE TABLE lab_results (
    lab_result_id INTEGER PRIMARY KEY,
    patient_id INTEGER NOT NULL,
    date_of_test TEXT NOT NULL,
    test_name TEXT NOT NULL,
    test_result TEXT NOT NULL,
    lab_recomandation TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients (patient_id)
);

CREATE TABLE treatment_plans (
    treatment_plan_id INTEGER PRIMARY KEY,
    patient_id INTEGER NOT NULL,
    date_of_treatment TEXT NOT NULL,
    doctor_name TEXT NOT NULL,
    treatment TEXT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients (patient_id)
);

-- Down

DROP TABLE patients;
DROP TABLE medical_history;
DROP TABLE medications;
DROP TABLE vital_signs;
DROP TABLE lab_results;
DROP TABLE treatment_plans;
DROP TABLE notes;
