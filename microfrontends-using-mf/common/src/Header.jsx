import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "./stores/useCartStore";

export default () => {
  
  const {cart, isShowCartPanel, toggleCartPanel} = useCartStore();

  return (

    

    <header className="">

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="">
              <img style={{'height': '35px'}} src="https://thecocktaildb.com/images/cocktail_left.png" alt="logo"></img> 
              Cocktail Shop
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            
            
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/statistics" className="nav-link text-white"> Statistic </Link>
                </li>
              </ul>
              <form className="d-flex">
                
                

                <button onClick={toggleCartPanel} className="btn btn-outline-primary" type="button"> 
                <span className="text-white">{cart?.length}</span>


                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart text-white" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </nav>


    </header>
  );
};
