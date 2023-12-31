import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberList = "0123456789";
const symbolList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);

  const [selectedChoice, setSelectedChoice] = useState([
    "lowercase",
    "uppercase",
    "numbers",
    "symbols",
  ]);

  const handleLowerCase = () => {
    setLowerCase(!lowerCase);
    handleCheckbox("lowercase")
  };
  
  const handleUpperCase = () => {
    setUpperCase(!upperCase);
    handleCheckbox("uppercase")
  };
  
  const handleNumbers = () => {
    setNumbers(!numbers);
    handleCheckbox("numbers")
  };
  
  const handleSymbols = () => {
    setSymbols(!symbols);
    handleCheckbox("symbols")
  };

  const handlePasswordLength = (e, value) => {
    setPasswordLength(value);
  };

  const generatePassword = () => {
    const characterList = [
      ...(lowerCase ? lowercaseList : ""),
      ...(upperCase ? uppercaseList : ""),
      ...(numbers ? numberList : ""),
      ...(symbols ? symbolList : ""),
    ].join("");


    let generatedPassword = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterListLength);
      generatedPassword += characterList[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    const copied = navigator.clipboard.readText();

    if (copied !== password && password.length) {
      navigator.clipboard.writeText(password);

      toast.success("Copied to clipboard!", {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    generatePassword();
  }, [password.length]);

  const handleCheckbox = (type) => {
    let tempChoices = selectedChoice;
    if (tempChoices.includes(type)) {
      const index = tempChoices.indexOf(type);

      tempChoices.splice(index, 1);
    } else {
      tempChoices.push(type);
    }

  };

  return (
    <>
      <form>
        <h1 className="mb-6 text-xl font-medium">Strong Password Generator</h1>
        <div className="mb-6 flex items-center">
          <input
            disabled
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg -blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-blue-500 dark:focus:border-blue-500"
            placeholder="Generated Password..."
            value={password}
          />
          <button
            onClick={copyToClipboard}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br -4 focus:outline-none -blue-300 dark:-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2"
          >
            Copy
          </button>
        </div>

        <h1 className="mb-2 text-md">Customize Password</h1>

        <div className="flex items-start mb-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={lowerCase}
              onChange={handleLowerCase}
              className="sr-only peer"
              disabled={selectedChoice.length===1 && selectedChoice.includes("lowercase")}
            />
            <div className="w-8 h-5 bg-gray-200  peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mx-auto"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include LowerCase (a-z)
            </span>
          </label>
        </div>
        <div className="flex items-start mb-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={upperCase}
              onChange={handleUpperCase}
              className="sr-only peer"
              disabled={selectedChoice.length===1 && selectedChoice.includes("uppercase")}

            />
            <div className="w-8 h-5 bg-gray-200  peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mx-auto"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include UpperCase (A-Z)
            </span>
          </label>
        </div>
        <div className="flex items-start mb-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={numbers}
              onChange={handleNumbers}
              className="sr-only peer"
              disabled={selectedChoice.length===1 && selectedChoice.includes("numbers")}

            />
            <div className="w-8 h-5 bg-gray-200  peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mx-auto"></div>

            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include Numbers (0-9)
            </span>
          </label>
        </div>
        <div className="flex items-start mb-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={symbols}
              onChange={handleSymbols}
              className="sr-only peer"
              disabled={selectedChoice.length===1 && selectedChoice.includes("symbols")}

            />
            <div className="w-8 h-5 bg-gray-200  peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mx-auto"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include Symbols (&-*)
            </span>
          </label>
        </div>

        <div className="RangeSlider mb-6">
          <h3 className="mb-2 text-sm">Password Length</h3>
          <div className="flex items-center">
            <div className="RangeCount mr-6 bg-gray-700 border border-gray-700 px-3 py-1 rounded-lg">
              {passwordLength}
            </div>
            <Slider
              value={passwordLength}
              onChange={handlePasswordLength}
              aria-label="Password Length Slider"
              defaultValue={passwordLength}
              min={8}
              max={32}
              step={1}
            />
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br -4 focus:outline-none -blue-300 dark:-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default PasswordGenerator;
