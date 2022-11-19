import React, {useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "common/Header";
import CartSidePanel from "./CartSidePanel";

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