import {useState} from 'react'
import FormProduct from './FormProduct';
import FormCategory from './FormCategory';

const Forms = ({categories,saveProduct,saveCategory,alert}) => {
    const [showModal,setShowModal] = useState({open:false,type:''});
    return (
        <>
            {/*************** ALERT ***************/}
            { alert && alert.msg ? <Alert alert={alert}> </Alert>  : '' }
            <div className="mb-4 md:flex md:justify-end md:space-x-2 max-md:grid max-md:grid-rows-2 max-md:space-y-2">
                <button 
                className=" bg-green-600 rounded-md p-2 text-white shadow-xl text-sm font-bold"
                type="button"
                onClick={() => setShowModal({open:true,type:'category'})}
                >
                + Category
                </button>
                <button 
                className="bg-blue-500 rounded-md p-2 text-white shadow-xl text-sm font-bold"
                type="button"
                onClick={() => setShowModal({open:true,type:'product'})}
                >
                + Product
                </button>
            </div>

            
            {showModal.open && (
                <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-auto flex justify-center p-5'>
                    <div className='mt-14 w-96'>
                    <div className='bg-white rounded-md shadow-2xl p-5 space-y-5'>
                        {
                            showModal.type === 'product' ? 
                            <FormProduct categories={categories} saveProduct={saveProduct} setShowModal={setShowModal}/> 
                            : 
                            <FormCategory saveCategory={saveCategory} setShowModal={setShowModal}/>
                        }
                        <div className='text-center'>
                        <button 
                            onClick={()=>setShowModal({open: false})}
                            className='text-orange-500 font-bold'>
                            Close
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Forms