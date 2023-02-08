import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import Alert from "../components/Alert";
import clienAxios from '../config/axios'
import { useEffect } from "react";

const NewPassword = () => {
  const params = useParams();
  const {token} = params;
  const [password,setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [alert,setAlert] = useState({error: false, msg: ''});
  const [correctToken, setCorrectToken] = useState(false);

  useEffect(()=>{
    const verifyToken = async e => {
      try {
        await clienAxios(`/user/forgetPassword/${token}`);
        setAlert({error:false,msg:'Insert your new Password'});
        setCorrectToken(true);
      } catch (error) {
        if(!error.response || !error.response.data.msg){
          setAlert({error:true, msg:'Internal server error'});
          return;
        }
        setAlert({error:true, msg:error.response.data.msg});
      }
    }
    verifyToken();
  },[])

  const handleSubmit = async e => {
    e.preventDefault();
    if(correctToken){
      if([password,repeatPassword].includes('')){
        setAlert({error:true,msg:'Complete the fields'});
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
      try {
        const response = await clienAxios.post(`/user/forgetPassword/${token}`,{password});
        setAlert({error:false,msg:response.data.msg});
      } catch (error) {
        if(!error.response || !error.response.data.msg){
          setAlert({error:true, msg:'Internal server error'});
          return;
        }
        setAlert({error:true, msg:error.response.data.msg});
      }
    }
  }

  return (
    <>
      <Alert 
        errorObj={alert}
      />
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-2xl p-10">
          <h1 className="text-orange-500 text-3xl text-center mb-5">Reset your Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input 
                type="password" 
                placeholder="New Password" 
                className="border border-gray-400 rounded p-2 w-full"
                onChange= { e => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input 
                type="password" 
                placeholder="Repeat your Password" 
                className="border border-gray-400 rounded p-2 w-full"
                onChange= { e => setRepeatPassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input 
                type="submit" 
                value="Change my password" 
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

export default NewPassword
