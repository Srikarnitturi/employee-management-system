import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">E</div>
        <span>EmployeeHub</span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-title">MAIN MENU</p>

        <NavLink to="/" className="nav-link">
          <span>📊</span>
          Dashboard
        </NavLink>

        <NavLink to="/employees" className="nav-link">
          <span>👥</span>
          Employees
        </NavLink>

        <NavLink to="/employees/add" className="nav-link">
          <span>➕</span>
          Add Employee
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings" className="nav-link">
          <span>⚙️</span>
          Settings
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;