import React, { useState } from 'react';

interface Props{
    isChecked:Boolean,
    setIsChecked:Function,
    title:String

}

const ToggleSwitch = ({isChecked,setIsChecked,title}:Props) => {
  

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (

      <span className='border-[0.063rem] p-2 mt-1 flex flex-row items-center justify-between'>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 px-2">{title}</span>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.125rem] after:start-[0.125rem] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
      </span>
  );
  
};

export default ToggleSwitch;
