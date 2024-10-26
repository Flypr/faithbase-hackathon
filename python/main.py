from fastapi import FastAPI, HTTPException # type: ignore
from pydantic import BaseModel # type: ignore
from typing import List, Dict, Optional
from transformers import pipeline  # type: ignore

# Define Pydantic models for request validation
class ContactInfo(BaseModel):
    phone: str
    email: str
    address: str

class PersonalInfo(BaseModel):
    first_name: str
    last_name: str
    date_of_birth: str
    gender: str
    contact: ContactInfo

class Surgery(BaseModel):
    type: str
    date: str

class FamilyHistory(BaseModel):
    diabetes: str
    heart_disease: str

class MedicalHistory(BaseModel):
    allergies: List[str]
    previous_conditions: List[str]
    surgeries: List[Surgery]
    family_history: FamilyHistory

class Medication(BaseModel):
    name: str
    dosage: Optional[str] = None
    frequency: Optional[str] = None
    start_date: Optional[str] = None

class VitalSigns(BaseModel):
    last_update: str
    blood_pressure: str
    heart_rate: str
    temperature: str
    respiratory_rate: str

class LabResult(BaseModel):
    test: str
    date: str
    results: Optional[Dict[str, str]] = None
    findings: Optional[str] = None

class PrescribedTreatment(BaseModel):
    treatment: str
    instructions: str

class FollowUpAppointment(BaseModel):
    date: str
    reason: str

class TreatmentPlan(BaseModel):
    current_diagnosis: str
    prescribed_treatments: List[PrescribedTreatment]
    follow_up_appointments: List[FollowUpAppointment]

class Note(BaseModel):
    date: str
    author: str
    note: str

class PatientData(BaseModel):
    patient_id: str
    personal_info: PersonalInfo
    medical_history: MedicalHistory
    medications: List[Medication]
    vital_signs: VitalSigns
    lab_results: List[LabResult]
    treatment_plan: TreatmentPlan
    notes: List[Note]

# Initialize FastAPI app
app = FastAPI()

# Initialize NER pipeline
ner_pipeline = pipeline("ner", model="blaze999/Medical-NER", aggregation_strategy="simple")

def analyze_patient_data(patient_data, patient_message):
    text_to_analyze = f"""
    Patient ID: {patient_data.patient_id}
    Name: {patient_data.personal_info.first_name} {patient_data.personal_info.last_name}
    DOB: {patient_data.personal_info.date_of_birth}
    Gender: {patient_data.personal_info.gender}
    Contact: {patient_data.personal_info.contact.phone}, {patient_data.personal_info.contact.email}, {patient_data.personal_info.contact.address}
    Allergies: {', '.join(patient_data.medical_history.allergies)}
    Previous Conditions: {', '.join(patient_data.medical_history.previous_conditions)}
    Surgeries: {', '.join([f"{surgery.type} on {surgery.date}" for surgery in patient_data.medical_history.surgeries])}
    Family History: Diabetes: {patient_data.medical_history.family_history.diabetes}, Heart Disease: {patient_data.medical_history.family_history.heart_disease}
    Current Medications: {', '.join([med.name for med in patient_data.medications])}
    Vital Signs: Last Update: {patient_data.vital_signs.last_update}, Blood Pressure: {patient_data.vital_signs.blood_pressure}, Heart Rate: {patient_data.vital_signs.heart_rate}, Temperature: {patient_data.vital_signs.temperature}, Respiratory Rate: {patient_data.vital_signs.respiratory_rate}
    Lab Results: {', '.join([f"{lab.test} on {lab.date} showed findings: {lab.results if lab.results else lab.findings}" for lab in patient_data.lab_results])}
    Current Diagnosis: {patient_data.treatment_plan.current_diagnosis}
    Notes: {', '.join([f"{note.date} by {note.author}: {note.note}" for note in patient_data.notes])}
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
    print(format_results)
    return formatted_response

