
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <div className="main-section">

          <Header />

          <main className="page-content">
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/employees"
                element={<Employees />}
              />

              <Route
                path="/employees/add"
                element={<AddEmployee />}
              />
            </Routes>
          </main>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;