
import './App.css';

import { Routes, Route } from "react-router-dom";
import { RegisterPage } from './pages/Register/Register.page';
import { LoginPage } from './pages/Login/Login.page';
import { ProductCreatePage } from './pages/Product/Product.page';
import { ProtectedRoute } from './components/PrivateRoute';
import { AllProductList } from './pages/AllProduct/AllProductList.page';
import { Navbar } from "./components/Navbar/Navbar.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={
      <>
        <Navbar />
      </>}></Route>
      <Route path="/register" element={
      <>
        <Navbar />
        <RegisterPage />  
      </>}></Route>
      <Route path="/login" element={
      <>
        <Navbar />
        <LoginPage />
      </>}></Route>
      <Route path="/createProduct" element={
      <>
        <ProtectedRoute>
          <>

            <Navbar />
            <ProductCreatePage />
          </>
        </ProtectedRoute>
      </>}></Route>

      <Route path="/getProducts" element={
      <>
        <ProtectedRoute>

          <>
            <Navbar />
            <AllProductList />
          </>
        </ProtectedRoute>
      </>}></Route>
    </Routes>
  );
}

export default App;
