import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const createEmployee = async (employeeData) => {
  const response = await axios.post(
    `${API_URL}/employees`,
    employeeData
  );

  return response.data;
};