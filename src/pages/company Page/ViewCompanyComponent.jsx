import React, { Component } from 'react'
import { useState , useEffect } from 'react';
import CompanyService from '../../services/CompanyService'


function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

function ViewCompanyComponent ({match}){

    const [data,setData] = useState({company:{company_id: "",
    company_name1: "",
    company_name: "",
    postal_code: "",
    address: "",
    telephone_number: "",
    email_address: "",
    hp_url: "",
    date_establishment: "",
    remarks: "",
    image: ""}});

    useEffect(async()=>{
        setData ( {company: await getData()})
        console.log(await getData(),data)
       
    },[]);
   function getData(){
    //todo get id from url
   var id = match.params.id;
      return  CompanyService.getCompanyById(id,getToken()).then( res => 
            res.data)
    }

   
        return (
            <div>
                <br></br>
                <div className = "card col-md-11 offset-md-1 offset-md-1">
                    <h3 className = "text-center"> View company Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> company name: </label>
                            <div> { data.company.company_name }</div>
                        </div>
                        <div className = "row">
                            <label> company email address: </label>
                            <div> { data.company.email_address }</div>
                        </div>
                        <div className = "row">
                            <label> company telephone number: </label>
                            <div> { data.company.telephone_number}</div>
                        </div>
                        <div className = "row">
                            <label> company zip code: </label>
                            <div> { data.company.postal_code}</div>
                        </div>
                        <div className = "row">
                            <label> company address: </label>
                            <div> { data.company.address}</div>
                        </div>
                        <div className = "row">
                            <label> company date establishment : </label>
                            <div> { data.company.date_establishment}</div>
                        </div>
                        <div className = "row">
                            <label> company hp url  : </label>
                            <div> { data.company.hp_url}</div>
                        </div>
                        <div className = "row">
                            <label> company remarks : </label>
                            <div> { data.company.remarks}</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }


export default ViewCompanyComponent
