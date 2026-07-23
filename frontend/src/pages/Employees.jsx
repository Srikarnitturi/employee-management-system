// import EmployeeList from "../components/EmployeeList";

// function Employees() {
//   return (
//     <div>
//       <h1>Employees</h1>
//       <EmployeeList />
//     </div>
//   );
// }

// export default Employees;
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Employees.css";

function Employees() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "Srikar Nitturi",
      email: "srikar@example.com",
      role: "React Native Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      role: "Backend Developer",
      status: "Active",
    },
    {
      id: 3,
      name: "Anil Sharma",
      email: "anil@example.com",
      role: "Full Stack Developer",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Priya Reddy",
      email: "priya@example.com",
      role: "UI/UX Designer",
      status: "Active",
    },
  ];

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employees-page">

      {/* Header */}

      <div className="employees-header">
        <div>
          <h1>Employees</h1>
          <p>Manage and view all employees in your organization.</p>
        </div>

        <Link
          to="/employees/add"
          className="add-employee-button"
        >
          + Add Employee
        </Link>
      </div>

      {/* Search */}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* Employee Table */}

      <div className="employee-table-container">

        <table className="employee-table">

          <thead>
            <tr>
              <th>Employee</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredEmployees.map((employee) => (

              <tr key={employee.id}>

                <td>
                  <div className="employee-info">

                    <div className="employee-avatar">
                      {employee.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{employee.name}</strong>
                      <span>{employee.email}</span>
                    </div>

                  </div>
                </td>

                <td>
                  {employee.role}
                </td>

                <td>
                  <span
                    className={`status ${
                      employee.status.toLowerCase()
                    }`}
                  >
                    ● {employee.status}
                  </span>
                </td>

                <td>

                  <div className="action-buttons">

                    <button className="edit-button">
                      Edit
                    </button>

                    <button className="delete-button">
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Employees;