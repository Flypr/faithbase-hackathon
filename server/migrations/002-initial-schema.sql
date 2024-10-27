-- Up

CREATE TABLE doctors (
    doctor_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    specialty TEXT,
    phone TEXT,
    email TEXT,
    license_number TEXT NOT NULL,
    hospital_affiliation TEXT,
    address TEXT,
    description TEXT,
    experience INTEGER
);

-- Down

DROP TABLE doctors;
