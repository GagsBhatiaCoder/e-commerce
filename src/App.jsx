import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import About from './Pages/About';
import ProductState from './context/ProductState';
import AllProducts from './Pages/AllProducts';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import FilterContextProvider from './context/FilterContext'


function App() {
  return (
    <>
      <ProductState>
        <FilterContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
        </FilterContextProvider>
      </ProductState>
    </>
  );
}

export default App;
