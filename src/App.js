import Searh from "./components/Searh"
import { BrowserRouter, Route, Switch} from "react-router-dom";
//import Company from "./components/AddCompany";
//import Users from './components/AddUsers';
import Login from "./pages/Login";
import Header from "./components/Header";
//import { useState } from 'react'
import ListEmploye from "./pages/employee page/ListEmploye";
import CreateEmployeeComponent from "./pages/employee page/CreateEmployeeComponent";
import ViewEmployeeComponent from "./pages/employee page/ViewEmployeeComponent";
import UpdateEmployeeComponent from "./pages/employee page/UpdateEmployeeComponent";
import ViewCompanyComponent from "./pages/company Page/ViewCompanyComponent"
import UpdateCompanyComponent from "./pages/company Page/UpdateCompanyComponent"
import ListCompany from "./pages/company Page/ListCompany";
import CreateCompanyComponent from "./pages/company Page/CreateCompanyComponent"
import { useHistory } from 'react-router-dom';




function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  let history = useHistory();
  const token = getToken();

  //if(!token) {
   
//history.push("/employees");
//window.location.href = `/Login`;
//history.push("/Login");
 // }
  return (
    <BrowserRouter>
  
      <div className='container'>
      <Header />
      <Switch>

<Route path={"/Search"} component={Searh} />
<Route path={"/Company/:id"} component={ViewCompanyComponent} />
<Route path={"/Companys"} component={ListCompany}/>
<Route path={"/addCompany"} component={CreateCompanyComponent} />
{/* Company */}
<Route path={"/updateCompany/:id"} component={UpdateCompanyComponent}/>
<Route path={"/Login"} component={Login} />
<Route path={"/employees"} component={ListEmploye} />
<Route path={"/addEmployee"} component={CreateEmployeeComponent} />
<Route path={"/employee/:id"} component={ViewEmployeeComponent}/>
<Route path={"/updateEmployee/:id"} component={UpdateEmployeeComponent}/>

      </Switch>
      
     

</div>
</BrowserRouter>

    
  );
}

export default App;
