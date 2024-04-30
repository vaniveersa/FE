import React from 'react'
import Datepicker from "react-tailwindcss-datepicker"; 
import { useState } from 'react';


const DateRangePicker = () => {
    const [value, setValue] = useState({ 
            startDate: null, 
            endDate: null 
        }); 
        
    const handleValueChange = (newValue:any) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 

  return (
    <>
        <Datepicker 
            value={value} 
            onChange={handleValueChange} 
            showShortcuts={true} 
            primaryColor="blue"
        /> 
    </>
  )
}

export default DateRangePicker

