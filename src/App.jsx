import { BrowserRouter, Routes, Route} from 'react-router-dom'

import AuthLayout from './layout/AuthLayout'
import AdminLayout from './layout/AdminLayout'

import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ConfirmAccount from './pages/ConfirmAccount'
import NewPassword from './pages/NewPassword'

import AdminMenu from './pages/AdminMenu'
import AdminProduct from './pages/AdminProduct'
import AdminUser from './pages/AdminUser'

import { AuthProvider } from './context/AuthProvider'
import { ProductsProvider } from './context/ProductProvider'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          
        <Routes>

          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="forgotpassword" element={<ForgotPassword/>}/>
            <Route path="confirmaccount/:token" element={<ConfirmAccount/>}/>
            <Route path="newpassword/:token" element={<NewPassword/>}/>
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminMenu />} />
            <Route path="product" element={<AdminProduct />} />
            <Route path="user" element={<AdminUser />} />
          </Route>

        </Routes>

        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
