import { useState , useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import {useHistory} from 'react-router-dom';

function UpdateEmployeeComponent (){

    const [formData,setFormData] = useState({nom:''});
    const history = useHistory();


    const {name} = formData;
    useEffect(()=>{
        
        getdataFromService();
    },[]);
   function getdataFromService(){
    //     EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
    //         let employee = res.data;
    //         this.setState({firstName: employee.firstName,
    //             lastName: employee.lastName,
    //             emailId : employee.emailId
    //         });
    //     });
     }

   const updateEmployee = (e) => {
    //     e.preventDefault();
    //     let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    //     console.log('employee => ' + JSON.stringify(employee));
    //     console.log('id => ' + JSON.stringify(this.state.id));
    //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
    //         this.props.history.push('/employees');
    //     });
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
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={name} onChange={onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={name} onChange={onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={name} onChange={onChange}/>
                                        </div>

                                        <button className="btn btn-success" onClick={updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    
}

export default UpdateEmployeeComponent
