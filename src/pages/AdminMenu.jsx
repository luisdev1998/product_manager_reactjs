import React from 'react'
import reactjsimg from '../assets/reactjs.png'
import nodejsimg from '../assets/nodejs.png'
import mongodbimg from '../assets/mongodb.png'

function AdminMenu() {
  return (
    <div className='text-center space-y-5'>
      <div className='w-full'>
        <label className='text-gray-800 text-4xl font-bold'>Welcome to <span className='text-orange-500'>Control</span> Panel</label>
      </div>
      <div className='w-full'>
        <label>Here you can manage your products</label>   
      </div>
      <div className='w-full'>
        <label>This proyect was created using</label>
      </div>
      <div className='grid lg:grid-cols-3'>
          <div className='p-5 '>
            <div className='flex items-center justify-center bg-white p-5 rounded-md shadow-2xl h-full w-full'>
              <img src={reactjsimg} className="w-auto max-lg:h-40"/>
            </div>
          </div>
          <div className='p-5 '>
            <div className='flex items-center justify-center bg-white p-5 rounded-md shadow-2xl h-full w-full'>
              <img src={nodejsimg} className="w-auto max-lg:h-40"/>
            </div>
          </div>
          <div className='p-5 '>
            <div className='flex items-center justify-center bg-white p-5 rounded-md shadow-2xl h-full w-full'>
              <img src={mongodbimg} className="w-auto max-lg:h-40"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminMenu