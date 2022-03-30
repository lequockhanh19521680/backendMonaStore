import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import Login from './views/RegisterLogin/Login';
import Register from './views/RegisterLogin/Register';
import News from './views/News/News';
import Cart from './views/Cart/Cart'
import Buy from './views/Buy/Buy'
import ProductDetail from './views/ProductDetail/ProductDetail';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
const UserLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const LoginLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/danh-muc" element={<Product />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/gio-hang" element={<Cart />} />
            <Route path="thanh-toan" element={<Buy />} />
            <Route path="san-pham/:id" element={<ProductDetail />} />
          </Route>
          <Route element={<LoginLayout />}>
            <Route path="/dang-ki" element={<Register />} />
            <Route path="/dang-nhap" element={<Login />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
