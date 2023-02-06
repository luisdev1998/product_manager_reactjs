
import ListProduct from './ListProduct'

const TableProducts = ({products,deleteProduct}) => {

    const deleteProd = id => {
        deleteProduct(id);
    }

    return (
        <>
            <div className='bg-white p-5 rounded-lg shadow-2xl'>
                {/*************** TITLE ***************/}
                <div className='flex items-center mb-4 space-x-1'>
                    <svg className="h-7 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" />
                    </svg>
                    <label className='text-gray-600 font-bold text-lg'>
                    Products List
                    </label>
                </div>
                {/*************** TABLE ***************/}
                <div className="flex flex-col">
                    <div className="overflow-x-auto ">
                        <div className="inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                            <thead className="border-b ">
                                <tr className="text-gray-400 text-sm">
                                <th scope="col" className="text-sm text-left font-bold">
                                    #
                                </th>
                                <th scope="col" className="text-sm text-left font-bold">
                                    Name
                                </th>
                                <th scope="col" className="text-sm text-left font-bold">
                                    Description
                                </th>
                                <th scope="col" className="text-sm text-left font-bold">
                                    Price
                                </th>
                                <th scope="col" className="text-sm text-left font-bold">
                                    Amount
                                </th>
                                <th scope="col" className="text-sm text-left font-bold">
                                    Category
                                </th>
                                <th scope="col" className="text-sm font-bold">
                                    Actions
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((data,i)=>{
                                return <ListProduct
                                    key={data._id}
                                    count={i+1}
                                    product={data}
                                    deleteProd={deleteProd}
                                />
                                })}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableProducts