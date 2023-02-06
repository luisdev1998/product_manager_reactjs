import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const ConfirmAccount = () => {
  const params = useParams();
  const { token } = params;
  const [  alert,setAlert ] = useState({});

  useEffect(()=>{
    const confirmAccount = async () => {
      try {
        const {data} = await clientAxios(`/user/confirm/${token}`);
        setAlert({error:false,msg:data.msg});
      } catch (error) {
        if(error.response.data.msg){
          setAlert({error:true, msg:error.response.data.msg});
          return;
        }
        setAlert({error:true, msg:'Internal server error!'});
      }
    }
    confirmAccount();
  },[]);

  return (
    <>
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-2xl p-10">
          <h1 className="text-orange-500 text-3xl text-center mb-5">Confirm Your Account</h1>
          <form>
            
            {
              alert && alert.msg ? 
                <Alert
                alert={alert}>
                </Alert>  : ''
            } 
            <div className="text-center">
              <label className="text-gray-700">
                If your account was confirmed, login in <Link to="/" className="text-orange-600 underline">Here!</Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ConfirmAccount
