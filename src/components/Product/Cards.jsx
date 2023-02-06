function Cards({products,categories}) {
  return (
    <>
        <div className='text-gray-700 font-bold text-2xl mb-4'>
            Manage Your Products Here
        </div>
        <div className='mb-4 grid lg:grid-cols-4 lg:space-x-4 max-lg:space-y-2'>
            <div className='bg-white rounded-lg shadow-md p-5 flex items-center justify-center'>
            <div className='flex items-center'>
                <svg className="h-12 pr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" />
                </svg>
            </div>
            <div className='block'>
                <div className="text-orange-500 font-bold text-4xl">
                {products.length} 
                </div>
                <div className='text-gray-500 font-bold text-sm'>
                Products
                </div>
            </div>
            </div>
            <div className='bg-white rounded-lg shadow-md p-5 flex items-center justify-center'>
            <div className='flex items-center'>
                <svg className="h-12 pr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5.127 3.502L5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0012.75 2h-5.5a2.25 2.25 0 00-2.123 1.502zM1 10.25A2.25 2.25 0 013.25 8h13.5A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5zM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 015.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 00-.123-.002H3.25z" />
                </svg>
            </div>
            <div className='block'>
                <div className="text-orange-500 font-bold text-4xl">
                {categories.length}
                </div>
                <div className='text-gray-500 font-bold text-sm'>
                Categories
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Cards