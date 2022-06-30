import React, { useEffect, useState } from 'react';
import {  Link } from "react-router-dom";




function Searh() {
   
    const [company, setcompany] = useState([]);
    const [users, setUsres] = useState([]);


useEffect(()=>{
    fetchCompany()
    fetchUser()
},[]);

const fetchCompany = async()=>{
    let data =  await fetch('http://localhost:5000/company').then(response => response.json());
  
    setcompany(data);
 
    
}

const fetchUser = async()=>{
    let data =  await fetch('http://localhost:5000/employe').then(response => response.json());
  console.log(data)
    setUsres(data);
 
    
}



let CompanyHtml = company.map((item)=>{
   return (<option key={item.company_id} value="item">{item.company_name}</option>)
});


let UsersHtml;
function getData(){

 UsersHtml = users.map((item)=>{
   return <tr>
   <th> {item.company_name} </th>
   <th>{item.user_Auth}</th>
   <th>{item.name}</th>
   <th>{item.email}</th>
   <th>{item.EmployeeNumber}</th>
   <th>   <Link to={`/Users/${item.Employee_id}`} > <button> edit</button> </Link></th>

</tr>
});

}
let valueid= 66;


    return (
        <div>
      <div className='box'>
     
       <label >Search company:</label>
       <br/>
        <select placeholder="Select a company" required>

            {CompanyHtml}
  
        </select> 
        <br/>
        <Link to={`/company/${valueid}`} ><button>Search </button></Link>

      </div>



<div className='box' >
     
     <label >Search  Users:</label>
     <br/>
     <form action='http://localhost:5000/employe/name' method='POST'>
     <select placeholder="Select a company" required>

            {CompanyHtml}
  
        </select> 
     <br/>
    <select required >
        <option value="item">system admin</option>
        <option value="item">admin</option>
        <option value="item">user</option>
        
    </select> 
    <br/>
<input type="text" required/>
<br/>
<button onClick={getData}>Search </button>
</form>

    </div>
<h2>Results</h2>

    <table>
        <thead>
        <tr>
            <th>Company name </th>
            <th>Account type</th>
            <th>User Name</th>
            <th>E-mail</th>
            <th>Employee Number</th>
            <th></th>

        </tr>
        </thead>
        <tbody>
        {UsersHtml}
        </tbody>
    
    </table>

</div>







    );
  }
  
  export default Searh;