import {useState} from 'react'

const FormCategory = ({saveCategory,setShowModal}) => {

    const [name,setName] = useState('');

    const handleSubmitCategory = async e => {
        e.preventDefault();
        setShowModal({open:false});
        saveCategory({
          name
        });
    }

    return (
        <form onSubmit={handleSubmitCategory}>
            <div className='space-y-5'>
                <div>
                    <label className='text-gray-600 font-bold text-xl'>
                    Register Your Category
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
                    <div className="mt-5">
                        <input 
                        type="submit" 
                        value="Save Category" 
                        className="bg-orange-500 text-white rounded p-2 w-full cursor-pointer hover:bg-orange-600 hover:font-bold transition-all"
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormCategory