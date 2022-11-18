import React, {useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
    
  
    return (
        <div className="flex flex-col h-screen justify-between">

            
        <Header className="h-10 bg-red-500"/>
        
        <main className="mb-auto h-10">
            <Outlet />
        </main>

        
        <Footer className="h-10 bg-blue-500"/>
        </div>
    )
}

export default Layout;