import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:5000/api/v1/Company";

class CompanyService {

    getAllCompany(token){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        return axios.get(COMPANY_API_BASE_URL,config);
    }

    createCompany(Company,token){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        return axios.post(COMPANY_API_BASE_URL, Company,config);
    }

    getCompanyById(CompanyId,token){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        return axios.get(COMPANY_API_BASE_URL + '/' + CompanyId,config);
    }

    updateCompany(Company, CompanyId,token){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        return axios.put(COMPANY_API_BASE_URL + '/' + CompanyId, Company,config);
    }

    deleteCompany(CompanyId,token){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        return axios.delete(COMPANY_API_BASE_URL + '/' + CompanyId,config);
    }
}

export default new CompanyService()