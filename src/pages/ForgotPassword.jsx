import { Link } from "react-router-dom"
import { useState } from "react"
import Alert from "../components/Alert";
import clienAxios from '../config/axios'

const ForgotPassword = () => {
  const [email,setEmail] = useState('');
  const [alert,setAlert] = useState({error: false, msg: ''});

  const handleSubmit = async e => {
    e.preventDefault();
    if(email === ''){
      setAlert({error:true,msg:'Complete the field'});
      return;
    }
    setAlert({});
    try {
      const response = await clienAxios.post('/user/forgetPassword',{email});
      setAlert({error:false,msg:response.data.msg});
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
          <h1 className="text-orange-500 text-3xl text-center mb-5">Find your account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-gray-800">
              <label>
                Please enter your email to search your account.
              </label>
            </div>
            <div className="mb-5">
              <input 
                type="email" 
                placeholder="Email" 
                className="border border-gray-400 rounded p-2 w-full"
                onChange= { e => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input 
                type="submit" 
                value="Search" 
                className="bg-orange-500 text-white rounded p-2 w-full cursor-pointer hover:bg-orange-600 hover:font-bold transition-all"
              />
            </div>
            <div className="mt-3 text-center">
              <Link 
                to="/" 
                className="text-orange-500">
                  Go back!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
