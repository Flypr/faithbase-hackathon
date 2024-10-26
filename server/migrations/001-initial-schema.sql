-- Up

CREATE TABLE Patients (
    Patient_id INTEGER PRIMARY KEY,
    First_name TEXT NOT NULL,
    Last_name TEXT NOT NULL,
    Date_of_birth TEXT NOT NULL,
    Gender TEXT,
    Phone TEXT,
    Email TEXT,
    Address TEXT
);

CREATE TABLE Medical_history (
    Medical_history_id INTEGER PRIMARY KEY,
    Patient_id INTEGER NOT NULL,
    Diagnosis TEXT NOT NULL,
    FOREIGN KEY (Patient_id) REFERENCES Patients (Patient_id)
);

CREATE TABLE Medications (
    Medication_id INTEGER PRIMARY KEY,
    Patient_id INTEGER NOT NULL,
    Medication TEXT NOT NULL,
    FOREIGN KEY (Patient_id) REFERENCES Patients (Patient_id)
);

CREATE TABLE Vital_signs (
    Vital_sign_id INTEGER PRIMARY KEY,
    Patient_id INTEGER NOT NULL,
    Heart_rate INTEGER NOT NULL,
    Blood_pressure INTEGER NOT NULL,
    Temperature INTEGER NOT NULL,
    Blood_sugar INTEGER NOT NULL,
    FOREIGN KEY (Patient_id) REFERENCES Patients (Patient_id)
);

CREATE TABLE Lab_results (
    Lab_result_id INTEGER PRIMARY KEY,
    Patient_id INTEGER NOT NULL,
    Date_of_test TEXT NOT NULL,
    Test_name TEXT NOT NULL,
    Test_result TEXT NOT NULL,
    FOREIGN KEY (Patient_id) REFERENCES Patients (Patient_id)
);

CREATE TABLE Treatment_plans (
    Treatment_plan_id INTEGER PRIMARY KEY,
    Patient_id INTEGER NOT NULL,
    Date_of_treatment TEXT NOT NULL,
    Doctor_name TEXT NOT NULL,
    Treatment TEXT NOT NULL,
    FOREIGN KEY (Patient_id) REFERENCES Patients (Patient_id)
);

-- Down

DROP TABLE Patients;
DROP TABLE Medical_history;
DROP TABLE Medications;
DROP TABLE Vital_signs;
DROP TABLE Lab_results;
DROP TABLE Treatment_plans;
DROP TABLE Notes;
