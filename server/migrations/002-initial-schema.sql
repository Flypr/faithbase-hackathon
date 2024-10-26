-- Up

CREATE TABLE Doctors (
    Doctor_id INTEGER PRIMARY KEY,
    First_name TEXT NOT NULL,
    Last_name TEXT NOT NULL,
    Specialty TEXT,
    Phone TEXT,
    Email TEXT,
    License_number TEXT NOT NULL,
    Hospital_affiliation TEXT,
    Address TEXT,
    Description TEXT,
    Experience INTEGER
);

-- Down

DROP TABLE Doctors;
