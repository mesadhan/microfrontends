import React, {useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import {useLocation} from "react-router-dom";

const Layout = () => {
    
  
    return (
        <>
        
        
        <Outlet />

       

        </>
    )
}

export default Layout;