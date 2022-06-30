import React, { useEffect, useState } from 'react';




function Company({match}) {
    const [company, setcompany] = useState({company_name:"",postal_code:"",address:"",telephone_number:"",email_address:"",hp_url:"",date_establishment:"",remarks:""
});


      useEffect(()=>{
        fetchCompany()
       
    },[]);
    
    const fetchCompany = async()=>{
        const id =match.params.id;
        console.log(id);
        let data =  await fetch(`http://localhost:5000/company/${id}`).then(response => response.json());
      

        setcompany(data);
     
     
        
    }


    return (
        


<section className='form'> 
<label >Company name</label>
<br/>
<div className='form-group'>
<input type="text" required defaultValue={company.company_name} />
</div>
<br/>
<label >Company name (Katakana)</label>
<br/>
<div className='form-group'>
<input type="text" required defaultValue={company.company_name} />
</div>
<label>Address</label>
<div className='form-group'>
<input type="text" required  defaultValue={company.address}/>
</div>
<label>Postal code</label>
<div className='form-group'>
<input type="text" required defaultValue={company.postal_code} />
</div>
<label>Telephone number</label>
<div className='form-group'>
<input type="text" required defaultValue={company.telephone_number} />
</div>
<label>E-mail address</label>
<div className='form-group'>
<input type="email" required defaultValue={company.email_address} />
</div>
<label>Web</label>
<div className='form-group'>
<input type="url" required defaultValue={company.hp_url} />
</div>
<label>Date of establishment </label>
<div className='form-group'>
<input type="date" required defaultValue={company.date_establishment} />
</div>
<label>Remarks</label>
<div className='form-group'>
<textarea defaultValue={company.remarks} />
</div>


<button>Save</button>

</section>






    );
  }
  
  export default Company;