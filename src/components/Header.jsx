import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'





function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function Header() {
const history = useHistory()
  const logout = ()=>{
    sessionStorage.clear()
    history.push("/Login")
  }



  return (<header className='header'>
  <div className='logo'>
    gestion employe


  </div>
  <ul>

  


    {getToken() ? (<>
      <li>
      <Link to='/employees'>
         list employee
      </Link>
    </li>
    <li>
      <Link to='/Companys'>
        list Company
      </Link>
    </li>
      
      <li>
        <button className='btns'  onClick={logout}>
          <FaSignOutAlt /> Logout
        </button>
      </li></>
    ) : (
      <>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Login
          </Link>
        </li>
        
      </>)
    }
  </ul>
</header>
  )
}

export default Header