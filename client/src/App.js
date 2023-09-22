import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './pages/Success';
import Failure from './pages/Failure';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/:category' element={<ProductList />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/success' element={<Success />} />
        <Route exact path='/failure' element={<Failure />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
