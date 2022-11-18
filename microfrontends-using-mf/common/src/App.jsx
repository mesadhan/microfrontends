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
import Layout from "./Layout";
import ViewingStatistics from "./pages/ViewingStatistics";
import NoPage from "./NoPage";


const App = () => {

  return (
    
      
      <BrowserRouter>
    
        <StatisticsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route exact path="/statistics" element={<ViewingStatistics />} />
            </Route>
            
            <Route path="*" element={<NoPage />} />

          </Routes>
        </StatisticsProvider>
    
    
      </BrowserRouter>
    

  );
};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);