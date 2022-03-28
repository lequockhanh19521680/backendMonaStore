import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
import Login from './views/RegisterLogin/Login';
import Register from './views/RegisterLogin/Register';
import News from './views/News/News';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/danh-muc" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
