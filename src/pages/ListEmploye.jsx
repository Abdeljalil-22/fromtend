import { useState ,useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import { useHistory } from 'react-router-dom';




function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }


function ListEmploye(){ 


    const history = useHistory();
    const [employees,setEmployees] = useState([]);
    useEffect(()=>{
        getAllEmployee()
       
    },[]);


    function getAllEmployee()
{
    EmployeeService.getEmployees(getToken).then((res) => {
        setEmployees({ employees: res.data});})

    }
   function deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            setEmployees({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    function viewEmployee(id){
        history.push(`/employee/${id}`);
    }

    function editEmployee(id) {
        history.push(`/updateEmployee/${id}`);
    }

    

    function addEmployee(){
        history.push('/addEmploye');
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
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }


export default ListEmploye
