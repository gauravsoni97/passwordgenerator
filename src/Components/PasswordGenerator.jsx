import { Slider } from "@mui/material";
import React, { useState } from "react";

const PasswordGenerator = () => {
  const [sliderValue, setSliderValue] = useState(17);

  const handleSliderValue = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      <form>
        <h1 className="mb-6 text-xl font-medium">Strong Password Generator</h1>
        <div class="mb-6 flex items-center">
          <input
          disabled
            type="text"
            id="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg -blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:-blue-500 dark:focus:border-blue-500"
            placeholder="random password "

          />
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br -4 focus:outline-none -blue-300 dark:-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 "
          >
            Copy
          </button>
        </div>

        <h1 className="mb-2 text-md ">Customize Password</h1>

        <div class="flex items-start mb-6">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include LowerCase (a-z)
            </span>
          </label>
        </div>
        <div class="flex items-start mb-6">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include UpperCase (A-Z)
            </span>
          </label>
        </div>
        <div class="flex items-start mb-6">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include Numbers (0-9)
            </span>
          </label>
        </div>
        <div class="flex items-start mb-6">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer--4 peer--blue-300 dark:peer--blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Include Symbols (&-*)
            </span>
          </label>
        </div>

        <div className="RangeSlider mb-6">
          <h3 className="mb-1 text-sm ">Password Length</h3>
          <div className="flex items-center">
            <div className="RangeCount mr-3 bg-gray-700 border border-gray-700 px-3 py-1 rounded-lg">
              {sliderValue}
            </div>
            <Slider
              value={sliderValue}
              onChange={handleSliderValue}
              aria-label="Disabled slider"
            />
          </div>
        </div>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br -4 focus:outline-none -blue-300 dark:-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
        >
          Generate Password
        </button>
      </form>
    </>
  );
};

export default PasswordGenerator;
