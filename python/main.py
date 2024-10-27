from fastapi import FastAPI, HTTPException  # type: ignore
from pydantic import BaseModel  # type: ignore
from typing import List
from transformers import pipeline  # type: ignore
import json  # Import json to handle JSON serialization

# Initialize FastAPI app
app = FastAPI()

# Initialize NER pipeline
ner_pipeline = pipeline("ner", model="blaze999/Medical-NER", aggregation_strategy="simple")

# Define the Pydantic model based on the new structure
class PatientData(BaseModel):
    patient_id: int
    first_name: str
    last_name: str
    personal_numeric_number: int
    date_of_birth: str
    gender: str
    age: int
    blood_group: str
    phone: str
    email: str
    symptoms_description: str
    patient_fo_number: int
    last_ai_model_response: str
    address: str
    medical_diagnosis: str
    examination: str
    examination_date: str
    prescribed_medication: str
    heart_rate: str
    blood_pressure: str
    temperature: float
    blood_sugar: int
    date_of_test: str
    test_name: str
    test_result: str
    lab_recommendation: str

def analyze_patient_data(patient_data: PatientData, patient_message: str):
    text_to_analyze = f"""
    Patient ID: {patient_data.patient_id}
    Name: {patient_data.first_name} {patient_data.last_name}
    DOB: {patient_data.date_of_birth}
    Gender: {patient_data.gender}
    Age: {patient_data.age}
    Blood Group: {patient_data.blood_group}
    Contact: {patient_data.phone}, {patient_data.email}, {patient_data.address}
    Symptoms: {patient_data.symptoms_description}
    Diagnosis: {patient_data.medical_diagnosis}
    Examination: {patient_data.examination} on {patient_data.examination_date}
    Current Medications: {patient_data.prescribed_medication}
    Vital Signs: Heart Rate: {patient_data.heart_rate}, Blood Pressure: {patient_data.blood_pressure}, Temperature: {patient_data.temperature}, Blood Sugar: {patient_data.blood_sugar}
    Lab Results: {patient_data.test_name} on {patient_data.date_of_test} showed: {patient_data.test_result}. Recommendation: {patient_data.lab_recommendation}
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
        print(formatted_results)
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

def to_json_with_quotes(data: dict) -> str:
    """Convert a dictionary to a JSON string with quoted keys."""
    return json.dumps(data, ensure_ascii=False)
