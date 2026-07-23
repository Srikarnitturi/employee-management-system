import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
    const employees = [
        {
          id: 1,
          name: "Srikar",
          role: "Frontend Developer",
        },
        {
          id: 2,
          name: "Raja",
          role: "Backend Developer",
        },
        {
          id: 3,
          name: "Nikitha",
          role: "Full Stack Developer",
        },
      ];
    return (
      <div>
        <h2>Employee List</h2>
        {employees.map((employee)=>(
            <EmployeeCard key={employee.id} employee={employee} />
        //     <div key={employee.id}>
        //     <h3>{employee.name}</h3>
        //     <p>{employee.role}</p>
        //   </div>
        ))}
      </div>
    );
  }
  
  export default EmployeeList;