import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

const queryClient = new QueryClient();

export default function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Set Layout as the main route */}
        <Route path="/" element={<Layout />}>
          {/* Define children routes */}
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="login" element={< Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
