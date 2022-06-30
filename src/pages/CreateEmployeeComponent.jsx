import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
///import {usehistory} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useState} from 'react'

function CreateEmployeeComponent(){
    const history = useHistory();
    const [formData, setFormData] = useState({company_name:"",postal_code:"",address:"",telephone_number:"",email_address:"",hp_url:"",date_establishment:"",remarks:""
});


      const { name, email } = formData
        

    // step 3
//    function componentDidMount(){

//         // step 4
//         if(this.state.id === '_add'){
//             return
//         }else{
//             EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
//                 let employee = res.data;
//                 this.setState({firstName: employee.firstName,
//                     lastName: employee.lastName,
//                     emailId : employee.emailId
//                 });
//             });
//         }        
//     }
    const onCreateEmployee = (e) => {
    //     e.preventDefault();
          let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    //     // console.log('employee => ' + JSON.stringify(employee));

    //     // // step 5
        // if(this.state.id === '_add'){
             EmployeeService.createEmployee(employee).then(res =>{
                history.push('/employees');
             });
        // }else{
        //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
        //         this.props.history.push('/employees');
        //     });
        // }
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

    // function getTitle(){
        // if(this.state.id === '_add'){
        //     return <h3 className="text-center">Add Employee</h3>
        // }else{
        //     return <h3 className="text-center">Update Employee</h3>
        // }
    //}
 
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    //getTitle()
                                }
                                <h3 className="text-center">Add Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder=" Name" name="name" className="form-control" 
                                            onChange={onChange} value={name} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="email" className="form-control" 
                                            onChange={onChange} value={email}/>
                                           
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                           onChange={onChange} value={name}
                                                />
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
            </div>
        )
    }


export default CreateEmployeeComponent
