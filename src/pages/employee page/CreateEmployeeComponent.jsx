import React from 'react'
import EmployeeService from '../../services/EmployeeService';
import { useHistory } from 'react-router-dom';
import {useState} from 'react'


function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }


function CreateEmployeeComponent(){
    const history = useHistory();
    const [formData, setFormData] = useState({number:"",
    department:"",
    name:"" ,
    zip_code:"" ,
    address:"" ,
    telephoneNumbe:"",
    dateBirth:"" ,
    remarks: "",
    company:""
});


    
    const onCreateEmployee = (e) => {
    e.preventDefault();
        
            console.log(formData)
             EmployeeService.createEmployee(formData,getToken()).then(res =>{
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
    
    history.push('/employees');
 
     }

   
 
        return (
            <div>
                <br></br>
                   <div className = "container">
                        
                            <div className = "card col-md-11 offset-md-1 offset-md-1">
                               
                                <h3 className="text-center">Add Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "row">
                                        <div className="col">
                                        <div className = "form-group">
                                            <label> company: </label>
                                            <input placeholder=" company" name="company" className="form-control" 
                                            onChange={onChange} value={formData.company} />
                                        </div>
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
                                        </div>
                                        <div className="col">
                                        <div className = "form-group">
                                            <label>  employee address : </label>
                                            <input placeholder="employee address" name="address" className="form-control" 
                                           onChange={onChange} value={formData.address}
                                                />
                                        </div>
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
                                            <input type="date" placeholder="employee date birth " name="dateBirth" className="form-control" 
                                           onChange={onChange} value={formData.dateBirth}
                                                />
                                        </div>
                                        </div>
                                        </div>
                                        <button className="btn btn-success" onClick={onCreateEmployee}
                                        >Save</button>
                                        <button className="btn btn-danger" onClick={cancel}
                                        style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            
        )
    }


export default CreateEmployeeComponent
