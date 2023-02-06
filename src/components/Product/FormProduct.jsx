
import { useState } from 'react'
const FormProduct = ({categories,saveProduct,setShowModal}) => {

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [amount,setAmount] = useState('');

    const handleSubmitProduct = async e => {
        e.preventDefault();
        setShowModal({open:false});
        saveProduct({
            name: name,
            description: description,
            price: price,
            amount: amount,
            category: document.querySelector('#category').value
        });
    }

    return (
        <form onSubmit={handleSubmitProduct}>
            <div className='space-y-5'>
                <div>
                    <label className='text-gray-600 font-bold text-xl'>
                    Register Your Product
                    </label>
                </div>
                <div>
                    <label className='text-gray-500 text-sm font-bold block'>
                    Name
                    </label>
                    <input 
                    type="text" 
                    className='w-full p-1 border-gray-200 border-2 rounded-md text-sm' 
                    placeholder='Insert the name'
                    onChange={e => setName(e.target.value)}
                    required/>
                </div>
                <div>
                    <label className='text-gray-500 text-sm font-bold block'>
                    Description
                    </label>
                    <input 
                    type="text" 
                    className='w-full p-1 border-gray-200 border-2 rounded-md text-sm' 
                    placeholder='Insert a description'
                    onChange={e => setDescription(e.target.value)}
                    required/>
                </div>
                <div>
                    <label className='text-gray-500 text-sm font-bold block'>
                    Price
                    </label>
                    <input 
                    type="number" 
                    className='w-full p-1 border-gray-200 border-2 rounded-md text-sm' 
                    placeholder='$0.00'
                    onChange={e => setPrice(e.target.value)}
                    required/>
                </div>
                <div>
                    <label className='text-gray-500 text-sm font-bold block'>
                    Amount
                    </label>
                    <input 
                    type="number" 
                    className='w-full p-1 border-gray-200 border-2 rounded-md text-sm' 
                    placeholder='00'
                    onChange={e => setAmount(e.target.value)}
                    required/>
                </div>
                <div>
                    <label className='text-gray-500 text-sm font-bold block'>
                    Category
                    </label>
                    <select 
                    className="w-full p-1 border-gray-200 border-2 rounded-md text-sm"
                    id="category"
                    required
                    >
                    {
                        categories.map(function(data,i){
                        return (<option key={i} value={data._id}>{data.name}</option>)
                        })
                    }
                    </select>
                </div>
                </div>
                <div className="mt-5">
                <input 
                    type="submit" 
                    value="Save Product" 
                    className="bg-orange-500 text-white rounded p-2 w-full cursor-pointer hover:bg-orange-600 hover:font-bold transition-all"
                />
                </div>
        </form>
    )
}

export default FormProduct