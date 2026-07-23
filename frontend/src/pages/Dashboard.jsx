import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import EmployeeCard from "../components/EmployeeCard";

import "./Dashboard.css";

function Dashboard() {
  const recentEmployees = [
    {
      id: 1,
      name: "Srikar Nitturi",
      role: "React Native Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Backend Developer",
      status: "Active",
    },
    {
      id: 3,
      name: "Anil Sharma",
      role: "Full Stack Developer",
      status: "Inactive",
    },
  ];

  return (
    <div className="dashboard">

      {/* Welcome Section */}

      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome back, Srikar. Here's what's happening
            with your employees today.
          </p>
        </div>

        <Link
          to="/employees/add"
          className="dashboard-add-button"
        >
          + Add Employee
        </Link>
      </div>


      {/* Statistics */}

      <div className="stats-grid">

        <StatCard
          title="Total Employees"
          value="25"
        />

        <StatCard
          title="Active Employees"
          value="20"
        />

        <StatCard
          title="Inactive Employees"
          value="5"
        />

        <StatCard
          title="Departments"
          value="6"
        />

      </div>


      {/* Recent Employees */}

      <div className="dashboard-section">

        <div className="section-header">
          <div>
            <h2>Recent Employees</h2>
            <p>Recently added employees in your organization.</p>
          </div>

          <Link
            to="/employees"
            className="view-all-button"
          >
            View All
          </Link>
        </div>


        <div className="recent-employees">

          {recentEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
            />
          ))}

        </div>

      </div>


      {/* Quick Actions */}

      <div className="dashboard-section">

        <h2>Quick Actions</h2>

        <div className="quick-actions">

          <Link
            to="/employees/add"
            className="quick-action"
          >
            <span className="quick-action-icon">
              +
            </span>

            <div>
              <strong>Add Employee</strong>
              <p>Create a new employee record.</p>
            </div>
          </Link>


          <Link
            to="/employees"
            className="quick-action"
          >
            <span className="quick-action-icon">
              👥
            </span>

            <div>
              <strong>View Employees</strong>
              <p>View and manage all employees.</p>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;