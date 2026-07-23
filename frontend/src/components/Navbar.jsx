import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      {" | "}
      <Link to="/employees">Employees</Link>
      {" | "}
      <Link to="/employees/add">Add Employee</Link>
    </nav>
  );
}

export default Navbar;