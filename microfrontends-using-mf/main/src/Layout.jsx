import React, {useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "common/Header";
import CartSidePanel from "cart/CartSidePanel";

const Layout = () => {
    
  
    return (
        <>

            
            <Header/>
       
            <Outlet />

            <CartSidePanel/>
       
       
        </>
    )
}

export default Layout;