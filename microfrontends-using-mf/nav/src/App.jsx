import React from "react";
import {createRoot} from 'react-dom/client';

import "./index.scss";

import useStore from "common/useStore";

const App = () => {
  const {count, increment} = useStore();

  return (

    <div>
      <h1 className="text-3xl font-bold">Hello from React and Module Federation</h1>
      <h1 className="text-3xl font-bold">React Version 18</h1>
      <h1>Count: {count}</h1>
    </div>

  );

};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<App />);