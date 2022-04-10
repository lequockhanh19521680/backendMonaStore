import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import ProductType from './views/Product/ProductType';
import Login from './views/RegisterLogin/Login';
import Register from './views/RegisterLogin/Register';
import News from './views/News/News';
import Cart from './views/Cart/Cart'
import Buy from './views/Buy/Buy'
import ProductDetail from './views/ProductDetail/ProductDetail';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AdminLeftMenu from './components/AdminLeftMenu/AdminLeftMenu'
import Dashboard from './views/Admin/Dashboard/Dashboard'
import AdminHeader from './components/AdminHeader/AdminHeader'
import Products from './views/Admin/Products/Products'
import Category from './views/Admin/Category/Category';
import Customers from './views/Admin/Customers/Customers';
import Coupons from './views/Admin/Coupons/Coupons';
import OurStaff from './views/Admin/OurStaff/OurStaff';
import AdminNews from './views/Admin/News/News';
import Orders from './views/Admin/Orders/Orders';
import AdminAddProduct from './views/Admin/Products/AddProduct';
import AdminEditProduct from './views/Admin/Products/EditProduct';
import EditCategory from './views/Admin/Category/EditCategory';
import AddCategory from './views/Admin/Category/AddCategory';
const UserLayout = () => {
  return (
    <div className="font-baskerville">
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

const AdminLayout = () => {
  return (
    <div className="flex flex-col">
      <AdminHeader />
      <div className="flex">
        <AdminLeftMenu />
        <Outlet />
      </div>
    </div>
  )
}

const abc = false

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/danh-muc" element={<Product />} />
          <Route path="/danh-muc/:type" element={<ProductType />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/gio-hang" element={<Cart />} />
          <Route path="/thanh-toan" element={<Buy />} />
          <Route path="/san-pham/:id" element={<ProductDetail />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/dang-ki" element={<Register />} />
          <Route path="/dang-nhap" element={<Login />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="category" element={<Category />} />
          <Route path="customers" element={<Customers />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="our-staff" element={<OurStaff />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products/add-product" element={<AdminAddProduct />} />
          <Route path="products/edit-product/:id" element={<AdminEditProduct />} />
          <Route path="category/add-category" element={<AddCategory />} />
          <Route path="category/edit-category/:id" element={<EditCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
