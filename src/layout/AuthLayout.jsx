import {Outlet} from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'

const AuthLayout = () => {
    return (
      <>
          <main className="bg-orange-500 p-10 h-screen">
            <div className="container mx-auto flex justify-center">
              <Outlet/>
            </div>
            <div className='text-center mt-4 text-gray-100 space-y-4'>
              <p>Your email won't be used for any other purpose.</p>
              <p>This project was created only to test my skills as a FullStack developer</p>
              <div className='flex justify-center w-auto'>
                <a href='https://www.linkedin.com/in/luissancheztapia98' target="_blank" 
                className='p-2 m-2 rounded-xl'>
                  <img className='max-h-36 max-w-36' src={linkedin}/>
                </a>
                <a href='https://www.tiktok.com/@luis_doge' target="_blank" 
                className='p-2 m-2 rounded-xl'>
                  <img className='max-h-36 max-w-36' src={tiktok}/>
                </a>
                <a href='https://github.com/luisdev1998' target="_blank" 
                className='p-2 m-2 rounded-xl'>
                  <img className='max-h-36 max-w-36' src={github}/>
                </a>
              </div>
            </div>
          </main>
      </>
    )
}

export default AuthLayout

