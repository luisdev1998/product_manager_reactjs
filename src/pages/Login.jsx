import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from '../components/Alert';
import clientAxios from '../config/axios';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [alert,setAlert] = useState('');

  const {setAuth} = useAuth();
  
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if([email,password].includes('')){
      setAlert({error:true,msg:'All fields are required'});
      return;
    }
    try {
      const response = await clientAxios.post('/user/login',{email,password});
      setAlert({error:false, msg:response.data.msg});
      localStorage.setItem('token',response.data.token);
      setAuth(response.data);
      navigate('/admin');
    } catch (error) {
      if(error.response.data.msg){
        setAlert({error:true, msg:error.response.data.msg});
        return;
      }
      setAlert({error:true, msg:'Internal server error!'});
    }
  }
  
  return (
    <>
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-2xl p-10">
          <h1 className="text-orange-500 text-3xl text-center mb-5">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input 
                type="email" 
                placeholder="Email" 
                className="border border-gray-400 rounded p-2 w-full"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input 
                type="password" 
                placeholder="Password" 
                className="border border-gray-400 rounded p-2 w-full"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {
              alert && alert !== '' && <Alert alert={alert}></Alert>
            }
            <Link 
              to="/forgotpassword" 
              className="text-orange-500">
                Forgot your password?
            </Link>
            <div className="mt-5">
              <input 
                type="submit" 
                value="Sign Up" 
                className="bg-orange-500 text-white rounded p-2 w-full cursor-pointer hover:bg-orange-600 hover:font-bold transition-all"
              />
            </div>
            <Link 
              to="/register" 
              className="mt-5 block text-center text-orange-500 border border-orange-500 rounded p-2 hover:font-bold transition-all">
                New user? Create an account
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;