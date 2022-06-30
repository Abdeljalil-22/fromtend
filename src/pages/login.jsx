import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import PropTypes from 'prop-types';
//import { useSelector, useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'
//import { toast } from 'react-toastify'
//import { login, reset } from '../features/auth/authSlice'
//import Spinner from '../components/Spinner'




async function loginUser(credentials) {
    return await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


 function Login({ setToken }) {
  
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
      const { email, password } = formData
    

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    

const handleSubmit = async e => {
    e.preventDefault();
     const token = await loginUser({
         formData
     });
    setToken(token);

   
  }

  
    
      return (
        <>
          <section className='heading'>
            <h1>
              <FaSignInAlt /> Login
            </h1>
           
          </section>
    
          <section className='form'>
            <form onSubmit={handleSubmit} >
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='Enter your email'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
              </div>
    
              <div className='form-group'>
                <button type='submit' className='btn btn-block' >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login