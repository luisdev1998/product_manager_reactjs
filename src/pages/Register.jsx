import { Link } from 'react-router-dom'
import { useState } from 'react'
import Alert from '../components/Alert'
import clienAxios from '../config/axios'

const Register = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repeatPassword,setRepeatPassword] = useState('');
  const [alert,setAlert] = useState({error: false, msg: ''});

  const handleSubmit = async e => {
    e.preventDefault();
    if([name,email,password,repeatPassword].includes('')){
      setAlert({msg:'All fields are required',error:true});
      return;
    }
    if(password.length < 6){
      setAlert({msg:'Password must be contain at least 6 characters',error:true});
      return;
    }
    if(password !== repeatPassword){
      setAlert({msg:'Passwords do not match',error:true});
      return;
    }
    setAlert({});
    
    // Create a user
    try {
      const response = await clienAxios.post('/user/save',{ name,email,password });
      setAlert({error:false,msg:response.data.msg})
    } catch (error) {
      if(!error.response || !error.response.data.msg){
        setAlert({error:true, msg:'Internal server error'});
        return;
      }
      setAlert({error:true, msg:error.response.data.msg});
    }
  }

  return (
    <>
      <Alert 
        errorObj={alert}
      />
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-2xl p-10">
          <h1 className="text-orange-500 text-3xl text-center mb-5">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input 
                type="text" 
                placeholder="Name" 
                className="border border-gray-400 rounded p-2 w-full"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input 
                type="email" 
                placeholder="Email" 
                className="border border-gray-400 rounded p-2 w-full"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input 
                type="password" 
                placeholder="Password" 
                className="border border-gray-400 rounded p-2 w-full"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input 
                type="password" 
                placeholder="Repeat your password" 
                className="border border-gray-400 rounded p-2 w-full"
                value={repeatPassword}
                onChange={e => setRepeatPassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input 
                type="submit" 
                value="Join Now!" 
                className="bg-orange-500 text-white rounded p-2 w-full cursor-pointer hover:bg-orange-600 hover:font-bold transition-all"
              />
            </div>
            <div className="mt-5 text-center">
              <Link 
                to="/" 
                className="text-orange-500">
                  Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
