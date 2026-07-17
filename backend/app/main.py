from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Welcome to Employee Management System"
    }

@app.get("/employees")
def get_employees():
    return [
        {
            "id": 1,
            "name": "John",
            "department": "HR"
        },
        {
            "id": 2,
            "name": "Alice",
            "department": "Development"
        }
    ]

@app.post("/employees")
def create_employee():
    return{
        "message":"Employee Created"
    }

@app.put("/employees/{id}")
def update_empolyee(id:int):
    return{
        "message":f"Employee {id} Updated"
    }


@app.delete("/employees/{id}")
def delete_employee(id:int):
    return {
        "message":f"Employee {id} Deleted"
    }