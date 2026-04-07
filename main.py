from fastapi import FastAPI, HTTPException

app = FastAPI()

employees=[]
slots=[]
assignments=[]

@app.get("/root")
def home():
    return {"message":"Hello World"}

@app.post("/employees")
def add_employees(name:str):
    emp= {"id":len(employees)+1,
          "name":name}
    employees.append(emp)
    return emp

@app.get("/get_employees")
def get_employees():
    return employees

@app.post("/slots")
def add_slots(name:str):
    sl={"id":len(slots)+1,
       "slot_name":name}
    slots.append(sl)
    return sl

@app.get("/get_slots")
def get_slots():
    return slots

@app.post("/assign")
def assign(employee_id:int,slot_id:int):
    emp=next((e for e in employees if e["id"]==employee_id),None)
    if not emp:
        raise HTTPException ("Employee not found")

    sl=next((s for s in slots if e["id"]==slot_id),None)
    if not sl:
        raise HTTPException("Slot not found")
    
    for a in assignments:
        if a["slot_id"]==slot_id:
            raise HTTPException("Already assigned")
    
    assignment={"employee_id":employee_id,
               "slot_id":slot_id}
    assignments.append(assignment)
    return assignments

@app.get("/assignments")
def get_assignments():
    return assignments
    





