import { useState ,useEffect} from 'react'
import CompanyService from '../../services/CompanyService';
import { useHistory } from 'react-router-dom';
import getToken from '../../system'

function ListCompany(){ 


    const history = useHistory();
    const [Companys,setCompanys] = useState([]);
    useEffect(()=>{
      getAllCompanys()
       
    },[]);


    function getAllCompanys()
{
    CompanyService.getAllCompany(getToken).then((res) => {
        setCompanys(res.data);})

    }
   function deleteCompany(id){
    CompanyService.deleteCompany(id,getToken).then( res => {
            setCompanys({Companys:Companys.filter(Company => Company.id !== id)});

        });
    }
    function viewCompany(id){
        history.push(`/Company/${id}`);
    }

    function editCompany(id) {
        history.push(`/updateCompany/${id}`);
    }

    

    function addCompany(){
        history.push('/addCompany');
    }

  
        return (
            <div>
                 <h2 className="text-center">Companys List</h2>
                 <div className = "">
                    <button className="btn btn-primary" onClick={addCompany}> Add Company</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>  Name</th>
                                    <th>  telephone number</th>
                                    <th>  email </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Companys.map(
                                        company => 
                                        <tr key = {company.company_id}>
                                             <td> { company.company_name} </td>   
                                             <td> {company.telephone_number}</td>
                                             <td> {company.email_address}</td>
                                             <td>
                                                 <button onClick={ () => editCompany(company.company_id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => deleteCompany(company.company_id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => viewCompany(company.company_id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }


export default ListCompany
