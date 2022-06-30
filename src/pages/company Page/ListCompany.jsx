import { useState ,useEffect} from 'react'
import CompanyService from '../../services/companyService';
import { useHistory } from 'react-router-dom';

function ListCompany(){ 


    const history = useHistory();
    const [Companys,setCompanys] = useState([]);
    useEffect(()=>{
        getAllCompanys()
       
    },[]);


    function getAllCompanys()
{
    CompanyService.getCompanys().then((res) => {
        setCompanys(res.data);})

    }
   function deleteCompany(id){
    CompanyService.deleteCompany(id).then( res => {
            setCompanys({Companys: Companys.Companys.filter(Company => Company.id !== id)});
        });
    }
    function viewCompany(id){
        history.push(`/Company/${id}`);
    }

    function editCompany(id) {
        history.push(`/updateCompany/${id}`);
    }

    

    function addCompany(){
        history.push('/addCompanys');
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
                                    <th>  First Name</th>
                                    <th>  Name</th>
                                    <th>  Email </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Companys.map(
                                        Company => 
                                        <tr key = {Companys.id}>
                                             <td> { Companys.firstName} </td>   
                                             <td> {Companys.lastName}</td>
                                             <td> {Companys.emailId}</td>
                                             <td>
                                                 <button onClick={ () => editCompany(Company.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => deleteCompany(Company.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => viewCompany(Company.id)} className="btn btn-info">View </button>
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
