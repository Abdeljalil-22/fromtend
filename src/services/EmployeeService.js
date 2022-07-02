import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:5000/api/v1/employe";

class EmployeeService {
  

    getEmployees(token){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        return axios.get(EMPLOYEE_API_BASE_URL,config);
    }

    createEmployee(employee,token){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        return axios.post(EMPLOYEE_API_BASE_URL, employee,config);
    }

    getEmployeeById(employeeId,token){
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId,config);
    }

    updateEmployee(employee, employeeId,token){
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee,config);
    }

    deleteEmployee(employeeId,token){
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId,config);
    }
}

export default new EmployeeService()