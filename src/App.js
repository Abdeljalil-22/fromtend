import Searh from "./components/Searh"
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Company from "./components/AddCompany";
import Users from './components/AddUsers';
import login from "./pages/login";
import Header from "./components/Header";
import { useState } from 'react'
import ListEmploye from "./pages/ListEmploye";
import CreateEmployeeComponent from "./pages/CreateEmployeeComponent";
import ViewEmployeeComponent from "./pages/ViewEmployeeComponent";
import UpdateEmployeeComponent from "./pages/UpdateEmployeeComponent";
import ListCompany from "./pages/company Page/ListCompany";



function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(token) {
    return <login setToken={setToken} />
  }
  return (
    <BrowserRouter>
  
      <div className='container'>
      <Header />
      <Switch>

<Route path={"/Search"} component={Searh} />
<Route path={"/Company/:id"} component={Company} />
<Route path={"/Companys"} component={ListCompany}/>
<Route path={"/employees"} component={ListEmploye} />
<Route path={"/Login"} component={login} />
<Route path={"/addEmploye"} component={CreateEmployeeComponent} />
<Route path={"/employe/:id"} component={ViewEmployeeComponent}/>
<Route path={"/updateEmployee/:id"} component={UpdateEmployeeComponent}/>

      </Switch>
      
     

</div>
</BrowserRouter>

    
  );
}

export default App;
