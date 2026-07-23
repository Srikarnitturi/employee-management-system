import { useState } from "react";

function AddEmployee() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Employee Name:", name);
    console.log("Employee Role:", role);
  };

  return (
    <div>
      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name</label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter employee name"
          />
        </div>

        <div>
          <label>Employee Role</label>

          <input
            type="text"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Enter employee role"
          />
        </div>

        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;