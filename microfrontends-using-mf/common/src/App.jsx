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

import StatisticsProvider from "./utils/StatisticsProvider";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import ViewingStatistics from "./pages/ViewingStatisticsPage";
import NoPage from "./pages/NoPage";


const App = () => {

  return (
    
      
      <BrowserRouter>
    
        <StatisticsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
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