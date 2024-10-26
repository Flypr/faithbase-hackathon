from fastapi import FastAPI, HTTPException  # type: ignore
from pydantic import BaseModel  # type: ignore
from typing import List, Optional, Dict
from transformers import pipeline  # type: ignore

# Define Pydantic models for request validation
class ContactInfo(BaseModel):
    phone: str
    email: str
    address: str

class Patient(BaseModel):
    first_name: str
    last_name: str
    date_of_birth: str
    gender: str
    age: int
    blood_group: str
    contact: ContactInfo
    symptoms_description: str
    patient_file_number: int
    last_ai_model_response: str

class MedicalHistory(BaseModel):
    diagnosis: str
    examination: str
    examination_date: str

class Medication(BaseModel):
    medication: str

class VitalSigns(BaseModel):
    heart_rate: str
    blood_pressure: str
    temperature: float
    blood_sugar: int

class LabResult(BaseModel):
    date_of_test: str
    test_name: str
    test_result: str
    lab_recommendation: str

class TreatmentPlan(BaseModel):
    date_of_treatment: str
    doctor_name: str
    treatment: str

class PatientData(BaseModel):
    patient: Patient
    medical_history: MedicalHistory
    medications: Medication
    vital_signs: VitalSigns
    lab_results: LabResult
    treatment_plans: TreatmentPlan

# Initialize FastAPI app
app = FastAPI()

# Initialize NER pipeline
ner_pipeline = pipeline("ner", model="blaze999/Medical-NER", aggregation_strategy="simple")

def analyze_patient_data(patient_data: PatientData, patient_message: str):
    text_to_analyze = f"""
    Patient ID: {patient_data.patient.patient_file_number}
    Name: {patient_data.patient.first_name} {patient_data.patient.last_name}
    DOB: {patient_data.patient.date_of_birth}
    Gender: {patient_data.patient.gender}
    Age: {patient_data.patient.age}
    Blood Group: {patient_data.patient.blood_group}
    Contact: {patient_data.patient.contact.phone}, {patient_data.patient.contact.email}, {patient_data.patient.contact.address}
    Symptoms: {patient_data.patient.symptoms_description}
    Diagnosis: {patient_data.medical_history.diagnosis}
    Examination: {patient_data.medical_history.examination} on {patient_data.medical_history.examination_date}
    Current Medications: {patient_data.medications.medication}
    Vital Signs: Heart Rate: {patient_data.vital_signs.heart_rate}, Blood Pressure: {patient_data.vital_signs.blood_pressure}, Temperature: {patient_data.vital_signs.temperature}, Blood Sugar: {patient_data.vital_signs.blood_sugar}
    Lab Results: {patient_data.lab_results.test_name} on {patient_data.lab_results.date_of_test} showed: {patient_data.lab_results.test_result}. Recommendation: {patient_data.lab_results.lab_recommendation}
    Treatment Plan: {patient_data.treatment_plans.treatment} by {patient_data.treatment_plans.doctor_name} on {patient_data.treatment_plans.date_of_treatment}.
    Additional Case: {patient_message}
    """

    results = ner_pipeline(text_to_analyze)

    # Convert the numpy float scores to Python float
    for result in results:
        result['score'] = float(result['score'])

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

    return sorted_results

@app.post("/analyze")
def analyze(patient_data: PatientData, patient_message: str):
    try:
        # Call the analysis function
        results = analyze_patient_data(patient_data, patient_message)

        # Format the results nicely
        formatted_results = format_results(results)

        return {"results": formatted_results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def format_results(results):
    # Create a dictionary to group results by entity type
    grouped_results = {}

    for entity in results:
        entity_group = entity['entity_group']
        if entity_group not in grouped_results:
            grouped_results[entity_group] = []
        grouped_results[entity_group].append({
            "word": entity['word'],
            "score": f"{entity['score']:.4f}"
        })

    # Create a structured response
    formatted_response = {}
    for entity_group, items in grouped_results.items():
        formatted_response[entity_group] = items
    return formatted_response
