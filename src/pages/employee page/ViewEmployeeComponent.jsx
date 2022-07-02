import React, { Component } from 'react'
import { useState , useEffect } from 'react';
import EmployeeService from '../../services/EmployeeService'


function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

function ViewEmployeeComponent ({match}){

    const [data,setData] = useState({employee:{company: "",
        date_birth: "",
        department: "",
        employee_address: "",
        employee_id: "",
        employee_name: "",
        employee_number: "",
        privilege_id: "",
        profile_image: "",
        remarks: "",
        telephone_number: "",
        zip_code: ""}});

    useEffect(async()=>{
        setData ( {employee: await getData()})
       
    },[]);
   function getData(){
    //todo get id from url
   var id = match.params.id;
      return  EmployeeService.getEmployeeById(id,getToken()).then( res => 
            res.data
        )
    }

   
        return (
            <div>
                <br></br>
                <div className = "card col-md-11 offset-md-1 offset-md-1">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> number: </label>
                            <div> { data.employee.employee_number }</div>
                        </div>
                        <div className = "row">
                            <label> Employee department: </label>
                            <div> { data.employee.department }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Name: </label>
                            <div> { data.employee.employee_name}</div>
                        </div>
                        <div className = "row">
                            <label> Employee zip code: </label>
                            <div> { data.employee.zip_code}</div>
                        </div>
                        <div className = "row">
                            <label> Employee address: </label>
                            <div> { data.employee.employee_address}</div>
                        </div>
                        <div className = "row">
                            <label> Employee telephone Numbe: </label>
                            <div> { data.employee.telephone_number}</div>
                        </div>
                        <div className = "row">
                            <label> Employee date Birth : </label>
                            <div> { data.employee.date_birth}</div>
                        </div>
                        <div className = "row">
                            <label> Employee remarks : </label>
                            <div> { data.employee.remarks}</div>
                        </div>
                        <div className = "row">
                            <label> Employee company : </label>
                            <div> { data.employee.company}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


export default ViewEmployeeComponent
