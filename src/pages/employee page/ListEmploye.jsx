import { useState ,useEffect} from 'react'
import EmployeeService from '../../services/EmployeeService'
import { useHistory } from 'react-router-dom';
//import getToken from '../../system'



function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }


 function ListEmploye(){ 


    const history = useHistory();
    const [employees,setEmployees] = useState([]);
    
    useEffect(async()=>{
       

        setEmployees(await getAllEmployee())
        console.log(await getAllEmployee(),employees)
       
    },[]);

   function getAllEmployee()
    {
      return EmployeeService.getEmployees(getToken())
        .then(  (response ) => {
          return  response.data;})
       
       
    
        }
     
   function deleteEmployee(id){
        EmployeeService.deleteEmployee(id,getToken()).then( res => {
            setEmployees({employees: employees.filter(employee => employee.id !== id)});
        });
    }
    function viewEmployee(id){
        history.push(`/employee/${id}`);
    }

    function editEmployee(id) {
        history.push(`/updateEmployee/${id}`);
    }

    

    function addEmployee(){
        history.push('/addEmployee');
    }
    try {
        var  htmlElemant= employees.map((employee) => {return(
            <tr key = {employee.employee_id}>
                 <td> { employee.department} </td>   
                 <td> {employee.employee_name}</td>
                 <td> {employee.telephone_number}</td>
                 <td>
                     <button onClick={ () => editEmployee(employee.employee_id)} className="btn btn-info">Update </button>
                     <button style={{marginLeft: "10px"}} onClick={ () => deleteEmployee(employee.employee_id)} className="btn btn-danger">Delete </button>
                     <button style={{marginLeft: "10px"}} onClick={ () => viewEmployee(employee.employee_id)} className="btn btn-info">View </button>
                 </td>
            </tr>
     )} )
    } catch (error) {
        console.log(error)
    }
     
    
  
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "">
                    <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee department</th>
                                    <th> Employee  name</th>
                                    <th> Employee telephoneNumbe </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
{/* {          employees.map((employee) => {
            <tr key = {employee.number}>
                 <td> { employee.department} </td>   
                 <td> {employee.name}</td>
                 <td> {employee.telephoneNumbe}</td>
                 <td>
                     <button onClick={ () => editEmployee(employee.number)} className="btn btn-info">Update </button>
                     <button style={{marginLeft: "10px"}} onClick={ () => deleteEmployee(employee.number)} className="btn btn-danger">Delete </button>
                     <button style={{marginLeft: "10px"}} onClick={ () => viewEmployee(employee.number)} className="btn btn-info">View </button>
                 </td>
            </tr>
} )                  htmlElemant  } */ htmlElemant}
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }


export default ListEmploye
