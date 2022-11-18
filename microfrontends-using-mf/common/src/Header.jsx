import React from "react";
import { Link } from "react-router-dom";


export default () => {
  
  return (
    <header className="bg-orange-700 text-white font-bold text-3xl p-5 flex">

      <img style={{'height': '35px'}} src="https://www.takeaway.com/campaign/takeawayout/img/logo.png" alt="logo"></img>

      <Link to="/" className="flex-grow"> Cocktail </Link>
      <div>

        {/* <button
          onClick={cartPanelToggle}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded">
          Cart Panel {isShowCartPanel? 'true' : 'false'}
        </button> */}

      </div>
    </header>
  );
};
