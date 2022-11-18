import React, {useEffect} from "react";
import {createRoot} from 'react-dom/client';

import "./index.scss";

import Logger from "./Logger";
import useViewingStatisticsStore from "./useViewingStatisticsStore";


const App = () => {

  const {userId, createUserIdentity} = useViewingStatisticsStore();

  return (
    
      <Logger>        
        <h1 className="text-3xl font-bold">Hello from React and Module Federation</h1>
        <h1 className="text-3xl font-bold">React Version 18</h1>
        <h1 className="text-3xl font-bold">User ID: {userId}</h1>
      </Logger>

  );
};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);