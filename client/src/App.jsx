
import './App.css';

import { Routes, Route } from "react-router-dom";
import { RegisterPage } from './pages/Register/Register.page';
import { LoginPage } from './pages/Login/Login.page';
import { ProductCreatePage } from './pages/Product/Product.page';
import { ProtectedRoute } from './components/PrivateRoute';
import { AllProductList } from './pages/AllProduct/AllProductList.page';
import { Navbar } from "./components/Navbar/Navbar.component";
import { Logout } from "./components/Logout";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
        </>
      }></Route>
      <Route path="/register" element={
        <>
          <RegisterPage />  
        </>
      }></Route>
      <Route path="/login" element={
        <>
          <LoginPage />
        </>
      }></Route>
      <Route path="/logout" element={
        <>
          <Logout />
        </>
      }></Route>
      <Route path="/createProduct" element={
        <>
          <ProtectedRoute>
            <ProductCreatePage />
          </ProtectedRoute>
        </>
      }></Route>
      <Route path="/getProducts" element={
        <>
          <ProtectedRoute>
            <AllProductList />
          </ProtectedRoute>
        </>
      }></Route>
    </Routes>
  );
}

export default App;
