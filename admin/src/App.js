import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {

  const {currentUser} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  useEffect(()=>{
    if(currentUser?.isAdmin!==true){
      navigate("/login")
    }
  },[currentUser, navigate])

  return (
    <div className="app">
      <Topbar />
        <div className="container">
          {currentUser?.isAdmin=== true && <Sidebar />}
          <Routes>
            <Route path='/login' element={<Login />} />
            {currentUser?.isAdmin===true && <><Route exact  path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newproduct' element={<NewProduct />} /></>}
          </Routes>
        </div>
    </div>
  );
}

export default App;