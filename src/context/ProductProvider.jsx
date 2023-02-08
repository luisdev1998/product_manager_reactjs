import {createContext,useState,useEffect} from 'react'
import clientAxios from '../config/axios'
import useAuth from '../hooks/useAuth'

const ProductsContext = createContext()
export const ProductsProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [categories,setCagegories] = useState([]);

    const [alert,setAlert] = useState({error: false, msg: ''});
    const [alertTimeout, setAlertTimeout] = useState(null);

    const { auth } =  useAuth();

    const listProducts = async () => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const {data} = await clientAxios('/product',config);
            setProducts(data);
        } catch (error) {
            if(error.response.data.msg){
                setAlert({error:true, msg:error.response.data.msg});
            }else{
              setAlert({error:true, msg:'Internal server error!'});
            }
            clearTimeout(alertTimeout);
            setAlertTimeout(
              setTimeout(() => setAlert({}), 3000)
            );
        }
    }
    const listCategories = async () => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const {data} = await clientAxios('/category',config);
            setCagegories(data);
        } catch (error) {
            if(error.response.data.msg){
                setAlert({error:true, msg:error.response.data.msg});
            }else{
              setAlert({error:true, msg:'Internal server error!'});
            }
            clearTimeout(alertTimeout);
            setAlertTimeout(
              setTimeout(() => setAlert({}), 3000)
            );
        }
    }
    const saveProduct = async (product) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const {data} = await clientAxios.post('/product',product,config);
            setProducts([data.product,...products]);
            setAlert({error:false,msg:data.msg});
        } catch (error) {
            if(error.response.data.msg){
                setAlert({error:true, msg:error.response.data.msg});
            }else{
              setAlert({error:true, msg:'Internal server error!'});
            }
            clearTimeout(alertTimeout);
        }
        clearTimeout(alertTimeout);
        setAlertTimeout(
          setTimeout(() => setAlert({}), 3000)
        );
    }
    const saveCategory = async (category) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const {data} = await clientAxios.post('/category',category,config);
            setCagegories([data.category,...categories]);
            setAlert({error:false,msg:data.msg});
        } catch (error) {
            if(error.response.data.msg){
                setAlert({error:true, msg:error.response.data.msg});
            }else{
              setAlert({error:true, msg:'Internal server error!'});
            }
            clearTimeout(alertTimeout);
        }
        clearTimeout(alertTimeout);
        setAlertTimeout(
          setTimeout(() => setAlert({}), 3000)
        );
    }
    const deleteProduct = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if(!token) return;
            const config = {
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const {data} = await clientAxios.delete(`/product/${id}`,config);
            
            const newData = products.filter(prod => prod._id !== data.product._id)
            setProducts(newData);
            setAlert({error:false,msg:data.msg});
        } catch (error) {
            if(error.response.data.msg){
                setAlert({error:true, msg:error.response.data.msg});
            }else{
              setAlert({error:true, msg:'Internal server error!'});
            }
            clearTimeout(alertTimeout);
        }
        clearTimeout(alertTimeout);
        setAlertTimeout(
          setTimeout(() => setAlert({}), 3000)
        );
    }

    useEffect(()=>{
        listProducts();
        listCategories();
    },[auth])


    return(
        <ProductsContext.Provider
            value={{
                products,
                categories,
                alert,
                alertTimeout,

                saveProduct,
                saveCategory,
                deleteProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContext;