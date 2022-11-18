import React from "react";

export default () => {
  
  const year = new Date().getFullYear();

  return (
    <footer className="bg-orange-700 text-align-center text-white font-bold p-5 flex">
      <p>© {year} Takeaway.com</p>
    </footer>
  );
};
