import React, { useEffect, useState } from 'react';
// import {  Link } from "react-router-dom";




function Users({match}) {
    const [usre, setUsres] = useState({company_name:"",postal_code:"",address:"",telephone_number:"",email_address:"",hp_url:"",date_establishment:"",remarks:""
});


      useEffect(()=>{
        fetchUser()
       
    },[]);
    
    const fetchUser = async()=>{
        const id =match.params.id;
        console.log(id);
        let data =  await fetch(`http://localhost:5000/employe/${id}`).then(response => response.json());
      

        setUsres(data);
     
     
        
    }
   


    return (
        <div className='form'>



<label >Name </label>
<br/>
<input type="text" required defaultValue={usre.company_name} />
Image
<br/>
<label >Name (Katakana)</label>
<br/>
<input type="text" required defaultValue={usre.company_name} />

<label>Address</label>
<input type="text" required  defaultValue={usre.address}/>

<label>Postal code</label>
<input type="text" required defaultValue={usre.postal_code} />

<label>Telephone number</label>
<input type="text" required defaultValue={usre.telephone_number} />

<label>E-mail address</label>
<input type="email" required defaultValue={usre.email_address} />

<label>Web</label>
<input type="url" required defaultValue={usre.hp_url} />
<label>Date of establishment </label>
<input type="date" required defaultValue={usre.date_establishment} />
<label>Remarks</label>
<textarea defaultValue={usre.remarks} />



<button>Save</button>


</div>


);
}

export default Users;