import {Outlet} from 'react-router-dom'
import linkedin from '../assets/linkedin.png'
import tiktok from '../assets/tiktok.png'
import github from '../assets/github.png'

const AuthLayout = () => {
    return (
      <>
          <main className="bg-orange-500 p-10">
            <div className="container mx-auto flex justify-center">
              <Outlet/>
            </div>
            <div className='text-center mt-4 text-gray-100 space-y-4'>
              <p>Your email won't be used for any other purpose.</p>
              <p>This project was created only to test my skills as a FullStack developer</p>
              <div className='flex justify-center w-auto'>
                <a href='https://www.linkedin.com/in/luissancheztapia98' target="_blank" 
                className='p-4 m-2 w-auto rounded-xl max-h-36 max-w-36'>
                  <img className='max-h-36 max-w-36 mb-4' src={linkedin}/>
                  <label className='text-white font-bold text-lg'>Profile</label>
                </a>
                <a href='https://www.tiktok.com/@luis_doge' target="_blank" 
                className='p-4 m-2 w-auto rounded-xl max-h-36 max-w-36'>
                  <img className='max-h-36 max-w-36 mb-4' src={tiktok}/>
                  <label className='text-white font-bold text-lg'>Motivation</label>
                </a>
                <a href='https://github.com/luisdev1998' target="_blank" 
                className='p-4 m-2 w-auto rounded-xl max-h-36 max-w-36'>
                  <img className='max-h-36 max-w-36 mb-4' src={github}/>
                  <label className='text-white font-bold text-lg'>Projects</label>
                </a>
              </div>
            </div>
          </main>
      </>
    )
}

export default AuthLayout

