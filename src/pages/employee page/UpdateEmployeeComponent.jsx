import { useState , useEffect } from 'react';
import EmployeeService from '../../services/EmployeeService';
import {useHistory} from 'react-router-dom';
function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
function UpdateEmployeeComponent ({match}){

    const [formData,setFormData] = useState({});
    const history = useHistory();


    const {name} = formData;
    useEffect(()=>{
        
        getdataFromService();
    },[]);
   function getdataFromService(){
     var id = match.params.id;
         EmployeeService.getEmployeeById(id,getToken()).then( (res) =>{
            let employee = res.data;
            setFormData(
                {number:employee.employee_number,
            department:employee.department,
            name:employee.employee_name ,
            zip_code:employee.zip_code ,
            address:employee.employee_address ,
            telephoneNumbe:employee.telephone_number,
            dateBirth:employee.date_birth ,
            remarks: employee.ramarks,
            company:employee.company    
            
        }); 
})
}


   const updateEmployee = (e) => {
        e.preventDefault();
        var id = match.params.id;
   
         EmployeeService.updateEmployee(formData, id,getToken()).then( res => {
            history.push('/employees');
        });
     }
    
    
     const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
   function cancel(){
    //if admin
        history.push('/employees');
        //if usar 
      //  history.push('/employee');
    }

    
        return (
            <div>
                <br></br>
                   <div className = "container">
                       
                            <div className = "card col-md-11 offset-md-1 offset-md-1">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "row">
                                        <div className="col">
                                    <div className = "form-group">
                                            <label>  departmant: </label>
                                            <input placeholder=" departmant" name="department" className="form-control" 
                                            onChange={onChange} value={formData.department}/>
                                           
                                        </div>
                                        <div className = "form-group">
                                            <label>  employee number: </label>
                                            <input placeholder="employee number" name="number" className="form-control" 
                                           onChange={onChange} value={formData.number}
                                                />
                                        </div>

                                        <div className = "form-group">
                                            <label>  employee name: </label>
                                            <input placeholder="employee name " name="name" className="form-control" 
                                           onChange={onChange} value={formData.name}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>  employee address : </label>
                                            <input placeholder="employee address" name="address" className="form-control" 
                                           onChange={onChange} value={formData.address}
                                                />
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className = "form-group">
                                            <label>  telephone number: </label>
                                            <input placeholder="telephone number" name="telephoneNumbe" className="form-control" 
                                           onChange={onChange} value={formData.telephoneNumbe}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>  employee zip code: </label>
                                            <input placeholder="employee zip code" name="zip_code" className="form-control" 
                                           onChange={onChange} value={formData.zip_code}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>  employee date birth: </label>
                                            <input  placeholder="employee date birth " name="dateBirth" className="form-control" 
                                           onChange={onChange} value={formData.dateBirth}
                                                />
                                        </div>
                                        </div>
                                        </div>
                                        <button className="btn btn-success" onClick={updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
          
        )
    
}

export default UpdateEmployeeComponent
