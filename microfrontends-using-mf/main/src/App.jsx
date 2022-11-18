import React from "react";
import {createRoot} from 'react-dom/client';
import HomeFilter from "./HomeFilter";
import NoPage from "common/NoPage";

import "./index.scss";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const App = () => {

  return (

    <div>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFilter />}>
          {/* <Route exact path="/:id" element={<DetailsPage />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

    </BrowserRouter>







    </div>

  );

};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);