# from fastapi import FastAPI
# from app.models import EmployeeCreate, EmployeeUpdate

# app = FastAPI()

# employees = []
# next_id = 1


# @app.get("/")
# def home():
#     return {
#         "message": "Welcome to Employee Management System"
#     }


# # GET ALL EMPLOYEES
# @app.get("/employees")
# def get_employees():
#     return employees


# # GET ONE EMPLOYEE
# @app.get("/employees/{id}")
# def get_employee(id: int):

#     for employee in employees:

#         if employee["id"] == id:
#             return employee

#     return {
#         "message": "Employee not found"
#     }


# # CREATE EMPLOYEE
# @app.post("/employees")
# def create_employee(employee: EmployeeCreate):

#     global next_id

#     new_employee = {
#         "id": next_id,
#         "name": employee.name,
#         "department": employee.department,
#         "salary": employee.salary
#     }

#     employees.append(new_employee)

#     next_id += 1

#     return {
#         "message": "Employee Created",
#         "employee": new_employee
#     }


# # UPDATE EMPLOYEE
# @app.put("/employees/{id}")
# def update_employee(id: int, employee: EmployeeUpdate):

#     for emp in employees:

#         if emp["id"] == id:

#             emp["name"] = employee.name
#             emp["department"] = employee.department
#             emp["salary"] = employee.salary

#             return {
#                 "message": "Employee Updated",
#                 "employee": emp
#             }

#     return {
#         "message": "Employee not found"
#     }


# # DELETE EMPLOYEE
# @app.delete("/employees/{id}")
# def delete_employee(id: int):

#     for emp in employees:

#         if emp["id"] == id:

#             employees.remove(emp)

#             return {
#                 "message": "Employee Deleted",
#                 "employee": emp
#             }

#     return {
#         "message": "Employee not found"
#     }

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Employee, EmployeeCreate, EmployeeUpdate

app = FastAPI()


# Database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home():
    return {
        "message": "Welcome to Employee Management System"
    }


# Get all employees
@app.get("/employees")
def get_employees(db: Session = Depends(get_db)):
    return db.query(Employee).all()


# Get employee by ID
@app.get("/employees/{id}")
def get_employee(id: int, db: Session = Depends(get_db)):
    employee = db.query(Employee).filter(Employee.id == id).first()

    if employee:
        return employee

    return {
        "message": "Employee not found"
    }


# Create employee
@app.post("/employees")
def create_employee(
    employee: EmployeeCreate,
    db: Session = Depends(get_db)
):
    new_employee = Employee(
        name=employee.name,
        department=employee.department,
        salary=employee.salary
    )

    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)

    return {
        "message": "Employee Created",
        "employee": new_employee
    }


# Update employee
@app.put("/employees/{id}")
def update_employee(
    id: int,
    employee: EmployeeUpdate,
    db: Session = Depends(get_db)
):
    emp = db.query(Employee).filter(Employee.id == id).first()

    if not emp:
        return {
            "message": "Employee not found"
        }

    emp.name = employee.name
    emp.department = employee.department
    emp.salary = employee.salary

    db.commit()
    db.refresh(emp)

    return {
        "message": "Employee Updated",
        "employee": emp
    }


# Delete employee
@app.delete("/employees/{id}")
def delete_employee(
    id: int,
    db: Session = Depends(get_db)
):
    emp = db.query(Employee).filter(Employee.id == id).first()

    if not emp:
        return {
            "message": "Employee not found"
        }

    db.delete(emp)
    db.commit()

    return {
        "message": "Employee Deleted"
    }