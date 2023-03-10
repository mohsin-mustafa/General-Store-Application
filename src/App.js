import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./store";
import './App.css';
import Nav from "./components/Nav"
import Home from './components/Home';
import Cart from "./components/Cart";
import Details from "./components/Details";
function App() {
  return (
    <BrowserRouter>
          <Provider store={store}>  
            <Nav/> 
            <Routes>
               
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/details/:id"  element={<Details />} />
                
                              

            </Routes>
        </Provider>  
    </BrowserRouter>
   
  );
}

export default App;
