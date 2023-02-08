import {Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar';

import React, { useState } from "react";

const AdminLayout = () => {

    const {auth,loading} =useAuth();
    const [showSidebar, setShowSidebar] = useState(false);

    if(loading) return 'cargando'
    return (
      <>
        <div className=' bg-gray-100'>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}></Sidebar>
          
          <div className={`max-md:ml-0 ml-64 h-screen overflow-auto transition-all duration-500 ease-in-out ${
            !showSidebar && "ml-0"
          }`}>
            <Header></Header>
            <div className='p-5 m-5'>
            { auth._id ? <Outlet /> : <Navigate to='/' />}
            </div>
          </div>
        </div>
      </>
    )
}

export default AdminLayout

