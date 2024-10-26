from transformers import pipeline  # type: ignore

# Load the Medical NER model
ner_pipeline = pipeline("ner", model="blaze999/Medical-NER", aggregation_strategy="simple")

# Patient data in JSON format
patient_data = {
    "patient_id": "12345",
    "personal_info": {
        "first_name": "John",
        "last_name": "Doe",
        "date_of_birth": "1985-07-12",
        "gender": "Male",
        "contact": {
            "phone": "555-1234",
            "email": "johndoe@example.com",
            "address": "123 Main St, Anytown, USA"
        }
    },
    "medical_history": {
        "allergies": ["Penicillin", "Peanuts"],
        "previous_conditions": ["Hypertension", "Asthma"],
        "surgeries": [
            {
                "type": "Appendectomy",
                "date": "2010-05-20"
            }
        ],
        "family_history": {
            "diabetes": "Father",
            "heart_disease": "Mother"
        }
    },
    "medications": [
        {
            "name": "Lisinopril",
            "dosage": "10 mg",
            "frequency": "once daily",
            "start_date": "2021-01-10"
        },
        {
            "name": "Albuterol",
            "dosage": "90 mcg",
            "frequency": "as needed"
        }
    ],
    "vital_signs": {
        "last_update": "2023-10-01",
        "blood_pressure": "120/80 mmHg",
        "heart_rate": "75 bpm",
        "temperature": "98.6 F",
        "respiratory_rate": "16 bpm"
    },
    "lab_results": [
        {
            "test": "CBC",
            "date": "2023-09-15",
            "results": {
                "WBC": "5.0",
                "RBC": "4.8",
                "Hemoglobin": "14.5",
                "Platelets": "250"
            }
        },
        {
            "test": "X-ray",
            "date": "2023-09-20",
            "findings": "Normal chest X-ray"
        }
    ],
    "treatment_plan": {
        "current_diagnosis": "Asthma",
        "prescribed_treatments": [
            {
                "treatment": "Inhaler",
                "instructions": "Use as needed during an asthma attack"
            }
        ],
        "follow_up_appointments": [
            {
                "date": "2023-12-10",
                "reason": "Asthma management review"
            }
        ]
    },
    "notes": [
        {
            "date": "2023-09-15",
            "author": "Dr. Smith",
            "note": "Patient is responding well to asthma treatment."
        }
    ]
}

# Combine all patient information into a single text block
text_to_analyze = f"""
Patient ID: {patient_data['patient_id']}
Name: {patient_data['personal_info']['first_name']} {patient_data['personal_info']['last_name']}
DOB: {patient_data['personal_info']['date_of_birth']}
Gender: {patient_data['personal_info']['gender']}
Allergies: {', '.join(patient_data['medical_history']['allergies'])}
Previous Conditions: {', '.join(patient_data['medical_history']['previous_conditions'])}
Current Medications: {', '.join([med['name'] for med in patient_data['medications']])}
Current Diagnosis: {patient_data['treatment_plan']['current_diagnosis']}
Vital Signs: Blood Pressure: {patient_data['vital_signs']['blood_pressure']}, Heart Rate: {patient_data['vital_signs']['heart_rate']}
Lab Results: {', '.join([f"{lab['test']} on {lab['date']} showed findings: {lab['results'] if 'results' in lab else lab['findings']}" for lab in patient_data['lab_results']])}
Notes: {', '.join([f"{note['date']} by {note['author']}: {note['note']}" for note in patient_data['notes']])}
Additional Case: I have a stomac ache in the lower part when I am breathing.
"""

# Run NER analysis on the combined text
results = ner_pipeline(text_to_analyze)

# Define entity order for sorting
entity_order = {
    'SIGN_SYMPTOM': 1,
    'DISEASE_DISORDER': 2,
    'DISEASE_CONDITION': 2,
    'MEDICATION': 3,
    'DIAGNOSTIC_PROCEDURE': 4,
    'AGE': 5,
    'SEX': 6,
    'CLINICAL_EVENT': 7,
    'NONBIOLOGICAL_LOCATION': 8,
    'DETAILED_DESCRIPTION': 9
}

# Sort results based on the defined order and scores
sorted_results = sorted(results, key=lambda x: (entity_order.get(x['entity_group'], 10), -x['score']))

# Print sorted results
print("Results for the combined patient data:\n")
for entity in sorted_results:
    print(f"Entity: {entity['word']}, Score: {entity['score']:.4f}, Entity Group: {entity['entity_group']}")
