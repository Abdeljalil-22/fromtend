import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';





async function loginUser(credentials) {
    return await fetch('http://localhost:5000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: credentials
    })
      .then(data => data.json())
   }

   function setToken(userToken) {
    sessionStorage.clear();
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
 function Login() {
  const history = useHistory();
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
    

const handleSubmit = async () => {
   
     const token = await loginUser(
      JSON.stringify(formData)
     );
   //  console.log(token);
    setToken(token);
   if (token.token){
    history.push("/employees")
   }
   
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
                <button type='submit' className='btns btn-blocks'  >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </>
  );
}


export default Login