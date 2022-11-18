import React, {useEffect} from "react";
import {createRoot} from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import "./index.scss";

import StatisticsProvider from "./StatisticsProvider";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ViewingStatistics from "./pages/ViewingStatistics";


const App = () => {

  return (
    
      
      <BrowserRouter>
    
        <StatisticsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route exact path="/statistics" element={<ViewingStatistics />} />
          </Routes>
        </StatisticsProvider>
    
    
      </BrowserRouter>
    

  );
};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);