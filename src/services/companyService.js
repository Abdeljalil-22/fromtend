import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:5000/Company";

class CompanyService {

    getCompanys(){
        return axios.get(COMPANY_API_BASE_URL);
    }

    createCompany(Company){
        return axios.post(COMPANY_API_BASE_URL, Company);
    }

    getCompanyById(CompanyId){
        return axios.get(COMPANY_API_BASE_URL + '/' + CompanyId);
    }

    updateCompany(Company, CompanyId){
        return axios.put(COMPANY_API_BASE_URL + '/' + CompanyId, Company);
    }

    deleteCompany(CompanyId){
        return axios.delete(COMPANY_API_BASE_URL + '/' + CompanyId);
    }
}

export default new CompanyService()