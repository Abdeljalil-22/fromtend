import React, { Component } from 'react'
import { useState , useEffect } from 'react';
import EmployeeService from '../services/EmployeeService'

function ViewEmployeeComponent (){

    const [data,setData] = useState({employee:{nom:'',id:''}});

    useEffect(()=>{
        componentDidMount();
       
    },[]);
   function componentDidMount(){
    //todo get id from url
        EmployeeService.getEmployeeById(1).then( res => {
            setData({employee: res.data});
        })
    }

   
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { data.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { data.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { data.employee.nom}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


export default ViewEmployeeComponent
