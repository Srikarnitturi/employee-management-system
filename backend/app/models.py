# from pydantic import BaseModel


# class EmployeeCreate(BaseModel):
#     name: str
#     department: str
#     salary: float


# class EmployeeUpdate(BaseModel):
#     name: str
#     department: str
#     salary: float

from sqlalchemy import Column, Integer, String, DECIMAL
from app.database import Base
from pydantic import BaseModel


# SQLAlchemy model
class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    department = Column(String(100), nullable=False)
    salary = Column(DECIMAL(10, 2), nullable=False)


# Pydantic model for POST
class EmployeeCreate(BaseModel):
    name: str
    department: str
    salary: float


# Pydantic model for PUT
class EmployeeUpdate(BaseModel):
    name: str
    department: str
    salary: float