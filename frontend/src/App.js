import './App.css';
import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import Home from './component/Home/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import WebFont from "webfontloader";
import { useEffect } from "react";
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';


function App() {

  useEffect(() => {
  WebFont.load({
    google: {
      families: ["Roboto", "Droid Sans", "Chilanka"],
    }, 
  });

  
}, []);
  return (
    <Router>
    <Header/>
    
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/product/:id" element={<ProductDetails/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/search" element={<Search/>}/>
    </Routes>
    <Footer/>
    </Router>

  );
}

export default App;
