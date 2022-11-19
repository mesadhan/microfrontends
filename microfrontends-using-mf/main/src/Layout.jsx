import React, {useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "common/Header";
import CartPanel from "./CartPanel";

const Layout = () => {
    
  
    return (
        <>

            
            <Header/>
       
            <Outlet />

            <CartPanel/>
       
       
        </>
    )
}

export default Layout;