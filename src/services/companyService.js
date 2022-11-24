import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:5000/api/v1/Company";

class CompanyService {
config={
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
    getAllCompany(token){
       
        return axios.get(COMPANY_API_BASE_URL,this.config);
    }

    createCompany(Company,token){
       
        return axios.post(COMPANY_API_BASE_URL, Company,this.config);
    }

    getCompanyById(CompanyId,token){
       
        return axios.get(COMPANY_API_BASE_URL + '/' + CompanyId,this.config);
    }

    updateCompany(Company, CompanyId,token){
        
        return axios.put(COMPANY_API_BASE_URL + '/' + CompanyId, Company,this.config);
    }

    deleteCompany(CompanyId,token){
       
        return axios.delete(COMPANY_API_BASE_URL + '/' + CompanyId,this.config);
    }
}

export default new CompanyService()
