import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:5000/employe";

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

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()