import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { login, signUp } from '../../firebase'
import { toast } from 'react-toastify'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

   const [signState , setSignState] = useState('Sign In')
   const [input , setInput] = useState({
    name : "",
    email : "",
    password : ""
   })
   const [loading , setLoading] =useState(false)


   const handleChange =(e)=>{
    e.preventDefault()
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,   // Spread the previous state
      [name]: value   // Update only the specific field that changed
    }));
   }
 
   // user aunthentication function
   const user_auth = async (e)=>{
    e.preventDefault()
    setLoading(true)
      if(signState === "Sign In"){
        await login(input.email , input.password)
        await toast.success("Login was successful!");
      } else {
        await signUp(input.name , input.email , input.password)
        await toast.success("Signup was successful!");
      }

      setLoading(false)
    }


   

  return (
    loading ? <div className="netflix-spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
    <div className='login'>
      <Link to='/'><img src={logo} alt="" className="login-logo" /></Link>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState === "Sign Up" ?  <input type="text" placeholder='Your Name' className='login-form-input' name='name' value={input.name} onChange={handleChange}/> : <></>}
          <input type="email" placeholder='Email' className='login-form-input' name='email' value={input.email} onChange={handleChange}/>
          <input type="password" placeholder='Password' className='login-form-input' name='password' value={input.password} onChange={handleChange}/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" className='checkbox'/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">

          {signState === 'Sign In' ? <p>New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up Now</span></p> : <p>Already have account? <span onClick={()=>{setSignState("Sign In")}} >Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
