import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import ScrollToTop from "./components/CommonComponents/ScrllToTop";
import { useEffect } from "react";


const helmetContext = {};


function App() {



  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route element={<MainLayout/>} >
            <Route path="/" element={<Home/>}  />
            <Route path="/admin" element={<Admin/>}  />
            <Route path="/wishlist" element={<Wishlist/>}  />
            <Route path="/basket" element={<Basket/>}  />
            <Route path="/watch/:id" element={<Detail/>}  />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
