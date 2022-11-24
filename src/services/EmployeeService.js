import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:5000/api/v1/employe";

class EmployeeService {
  
config=  {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
    getEmployees(token){
        
        return axios.get(EMPLOYEE_API_BASE_URL,this.config);
    }

    createEmployee(employee,token){
       
        return axios.post(EMPLOYEE_API_BASE_URL, employee,this.config);
    }

    getEmployeeById(employeeId,token){
     
      }
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId,this.config);
    }

    updateEmployee(employee, employeeId,token){
      
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee,this.config);
    }

    deleteEmployee(employeeId,token){
     
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId,this.config);
    }
}

export default new EmployeeService()
