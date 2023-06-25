import React from "react";
import PasswordGenerator from "./Components/PasswordGenerator";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="max-w-sm w-sm bg-gray-800 border border-gray-700 rounded-3xl p-6 md:p-12">
      <PasswordGenerator />
    </div>
  );
};

export default App;
