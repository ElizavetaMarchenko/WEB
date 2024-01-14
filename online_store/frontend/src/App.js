import { Routes, Route } from 'react-router-dom';
import Mainpage from './pages/mainpage/mainpage';
import Profilepage from './pages/profilepage/profilepage';
import Loginpage from './pages/loginpage/loginpage';
import Registrationpage from './pages/registrationpage/registrationpage';
import AddProductPage from './pages/addproductpage/addproductpage';
import EditProductPage from './pages/editproductpage/editproductpage';
import ProductPage from './pages/productpage/productpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/registration" element={<Registrationpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/editproduct" element={<EditProductPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;