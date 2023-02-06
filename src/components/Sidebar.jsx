import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from '../hooks/useAuth'

function Sidebar({showSidebar,setShowSidebar}) {
    const {closeSession} = useAuth();
  
    const handleClick = (e) => {
        document.querySelectorAll('#menus a').forEach(el => {
            el.classList.remove('bg-orange-100', 'border-orange-500', 'border-r-4','text-gray-700');
        });
        e.currentTarget.classList.add('bg-orange-100', 'border-orange-500', 'border-r-4','text-gray-700');
    };
    
    useEffect(() => {
        if(window.location.pathname.includes('product')){
            document.querySelector('#product').classList.add('bg-orange-100', 'border-orange-500', 'border-r-4','text-gray-700');
        }else{
            document.querySelector('#menu').classList.add('bg-orange-100', 'border-orange-500', 'border-r-4','text-gray-700');
        }
    }, [])
    

    return (
        <aside
            className={`absolute inset-y-0 left-0 bg-white border-gray-200 border-r-2 w-64 transition duration-500 ease-in-out transform ${
            showSidebar ? "translate-x-0 max-md:shadow-gray-900 max-md:shadow-2xl" : "-translate-x-full"
            }`}
        >
            <div className="fixed -right-10 top-3">
                <button onClick={() => setShowSidebar(!showSidebar)} className="bg-orange-500 text-white text-xl rounded p-2">
                    <svg className="w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" />
                    </svg>
                </button>
            </div>
            <div className="mb-5 p-2 h-14 bg-white flex justify-center items-center border-gray-200 border-b-2 ">
                <div className="font-bold text-2xl"><span className="text-orange-500">Control</span> Panel</div>
            </div>
            <div className="space-y-3 text-gray-500 font-bold" id="menus">
                <Link to="" className="flex items-center p-3" onClick={handleClick} id="menu">
                    <svg className="h-5 pr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" />
                    </svg>
                    Menu
                </Link>
                <Link to="product" className="flex items-center p-3" onClick={handleClick} id="product">
                    <svg className="h-5 pr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" />
                    </svg>
                    Products
                </Link>
                <button className="flex items-center p-3" onClick={closeSession}>
                    <svg className="h-5 pr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" />
                        <path clipRule="evenodd" fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" />
                    </svg>
                    Logout
                </button>
            </div>
        </aside>
    )
  }
  
  export default Sidebar