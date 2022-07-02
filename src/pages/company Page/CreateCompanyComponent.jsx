import React from 'react'
import CompanyService from '../../services/CompanyService';
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import getToken from '../../system'


// function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
//   }


function CreateCompanyComponent(){
    const history = useHistory();
    const [formData, setFormData] = useState({name:'',postalCode:'',address:'',telephoneNumber:'',emailAddress:'',HPURL:'',dateEstablishment:'',remarks:'' 
});


    
    const onCreateCompany = (e) => {
    e.preventDefault();
        
            console.log(formData)
             CompanyService.createCompany(formData,getToken).then(res =>{
                history.push('/Companys');
             });
        
    }
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
     function cancel(){
    
    history.push('/Companys');
 
     }

   
 
        return (
            <div>
                <br/>
                   <div className = "container">
                        
                            <div className = "card col-md-11 offset-md-1 offset-md-1">
                                
                                <h3 className="text-center">Add Company</h3>
                                <div className = "card-body">
                                
                                    <form>
                                    <div className = "row">
                                    <div className="col">
                                        <div className = "form-group">
                                            <label> company name: </label>
                                            <input placeholder=" company name" name="name" className="form-control" 
                                            onChange={onChange} value={formData.name} />
                                        </div>
                                        <div className = "form-group">
                                            <label>  company adress: </label>
                                            <input placeholder=" adress" name="address" className="form-control" 
                                            onChange={onChange} value={formData.address}/>
                                           
                                        </div>
                                    
                                        <div className = "form-group">
                                            <label>  Company email Address: </label>
                                            <input placeholder="Company emailAddress" name="emailAddress" className="form-control" 
                                           onChange={onChange} value={formData.emailAddress}
                                                />
                                        </div>

                                        <div className = "form-group">
                                            <label>  Company telephone Number: </label>
                                            <input placeholder="Company telephone Number " name="telephoneNumber" className="form-control" 
                                           onChange={onChange} value={formData.telephoneNumber}
                                                />
                                        </div>
                                        </div>
                                        <div className="col">
                                        <div className = "form-group">
                                            <label>  Company date Establishment : </label>
                                            <input  type ="date"placeholder="Company date Establishment" name="dateEstablishment" className="form-control" 
                                           onChange={onChange} value={formData.dateEstablishment}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>   postal Code: </label>
                                            <input placeholder=" postal Code" name="postalCode" className="form-control" 
                                           onChange={onChange} value={formData.postalCode}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>  Company HPURL : </label>
                                            <input placeholder="Company HPURL " name="HPURL" className="form-control" 
                                           onChange={onChange} value={formData.HPURL}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label>  Company remarks : </label>
                                            <input  placeholder="Company  remarks " name="remarks" className="form-control" 
                                           onChange={onChange} value={formData.remarks}
                                                />
                                        </div>
                                        </div>
                                        </div>
                                        <button className="btn btn-success" onClick={onCreateCompany}
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


export default CreateCompanyComponent
