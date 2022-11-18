import React from "react";
import {createRoot} from 'react-dom/client';
import HomeFilter from "./HomeFilter";
import NoPage from "common/NoPage";
import ViewingStatistics from "common/ViewingStatistics";
import StatisticsProvider from "common/StatisticsProvider";

import Details from "./Details";


import "./index.scss";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Layout from "./Layout";

const App = () => {

  return (

    <div>


    <BrowserRouter>
      <StatisticsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeFilter />} />
            <Route exact path="/statistics" element={<ViewingStatistics />} />
            <Route exact path="/:id" element={<Details />} />
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