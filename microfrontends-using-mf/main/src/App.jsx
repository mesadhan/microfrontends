import React from "react";
import { createRoot } from 'react-dom/client';
import NoPage from "common/NoPage";
import ViewingStatisticsPage from "common/ViewingStatisticsPage";
import StatisticsProvider from "common/StatisticsProvider";

import DetailsPage from "./pages/DetailsPage";


import "./index.scss";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

const App = () => {

  return (

    <div>


      <BrowserRouter>
        <StatisticsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route exact path="/statistics" element={<ViewingStatisticsPage />} />
              <Route exact path="/:id" element={<DetailsPage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </StatisticsProvider>
      </BrowserRouter>







    </div>

  );

};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);