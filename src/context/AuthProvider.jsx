import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/axios";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [auth,setAuth] = useState({});

    useEffect(()=> {
        const authUser = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                setLoading(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const {data} = await clientAxios('/user/profile',config);
                setAuth(data.profile);
            } catch (error) {
                console.log(error);
                setAuth({});
            }
            setLoading(false);
        }
        authUser();
    },[])

    const closeSession = () => {
        localStorage.removeItem('token');
        setAuth({});
    }

    return (
        <AuthContext.Provider
        value={{
            auth,setAuth,loading,closeSession
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

export default AuthContext;