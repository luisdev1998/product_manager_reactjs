import useAuth from '../hooks/useAuth'

function Header() {
  const {auth} = useAuth();
  
  return (
    <header className="bg-white border-gray-300 border-b-2 p-2 h-14 ">
      <div className="flex items-center justify-end text-gray-600 font-bold text-sm">
        <svg className='w-10 pr-2' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clipRule="evenodd" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" />
        </svg>
        {auth.name}
      </div>
    </header>
  )
}

export default Header