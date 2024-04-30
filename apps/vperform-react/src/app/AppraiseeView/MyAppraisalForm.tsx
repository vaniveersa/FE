import React from 'react'
import { useState } from 'react';

const MyAppraisalForm = () => {
    const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      }
      const handleDraft = () => {
        console.log('Draft clicked');
      };
    
      const handleSubmit = () => {
        console.log('Submitted');
      }
  return (
<>

<div className="bg-white p-4 rounded-md shadow-md m-4">
      <div className="flex items-center space-x-4 m-4">
     <div className="relative">
       <input
         type="text"
         placeholder="Added by"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
     <div className="relative">
       <input
         type="text"
         placeholder="Appraisal Cycle Period"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
   </div>
   <h3>Instructions and Guidelines</h3>
   <p className='text-blue-500 mt-2'>Please read and understand all the guidelines below before you start with the Self-Appraisal process.</p>
   <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
  <h3 className='mt-2'>Please rate yourself on the KRA's based on the rating scale of 1-5 on each KRA Tab/ Section. On the Rating scale-</h3>
             <table className="  border-b divide-y mt-2 divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rating Scale
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Performance Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Outstanding</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Exceed Expectations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Meets Expectations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Partially Meets Expectations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Below Expectations</td>
                </tr>
              </tbody>
            </table>
   </div>
     <div className="bg-white p-4 rounded-md shadow-md m-4">
      <h1 className='text-blue-800 px-2 '>Past Engagement in 6 months </h1>
      <div className="flex items-center space-x-4 m-4">
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project 1"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project manager"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        
       </div>
     </div>
    
   </div>
   <div className="flex items-center space-x-4 m-4">
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project 2"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project manager"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        
       </div>
     </div>
    
   </div>
   <div className="flex items-center space-x-4 m-4">
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project 3"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
     <div className="relative">
       <input
         type="text"
         placeholder="Enter project manager"
         className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
       </div>
     </div>
   </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md m-4">
    <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
      Result Orientation
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
            <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <div className=" mt-8">
        <div className="w-1/2 mr-4">
          <p className="text-gray-600 mb-2">Self Rating</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none">
            <option value="select">Select</option>
          </select>
        </div>
        <div className="w-1/2 mt-2 w-full">
          <p className="text-gray-600 mb-2">Self Comments</p>
          <textarea className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none" rows={4}></textarea>
        </div>
      </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-md m-4">
    <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
      Achievement Orientation
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
            <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <div className=" mt-8">
        <div className="w-1/2 mr-4">
          <p className="text-gray-600 mb-2">Self Rating</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none">
            <option value="select">Select</option>
          </select>
        </div>
        <div className="w-1/2 mt-2 w-full">
          <p className="text-gray-600 mb-2">Self Comments</p>
          <textarea className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none" rows={4}></textarea>
        </div>
      </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-md m-4">
    <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
     Customer Service Orientation
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
            <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <div className=" mt-8">
        <div className="w-1/2 mr-4">
          <p className="text-gray-600 mb-2">Self Rating</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none">
            <option value="select">Select</option>
          </select>
        </div>
        <div className="w-1/2 mt-2 w-full">
          <p className="text-gray-600 mb-2">Self Comments</p>
          <textarea className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none" rows={4}></textarea>
        </div>
      </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-md m-4">
    <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
     Contribution & Commitment to Veersa
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
            <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <div className=" mt-8">
        <div className="w-1/2 mr-4">
          <p className="text-gray-600 mb-2">Self Rating</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none">
            <option value="select">Select</option>
          </select>
        </div>
        <div className="w-1/2 mt-2 w-full">
          <p className="text-gray-600 mb-2">Self Comments</p>
          <textarea className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none" rows={4}></textarea>
        </div>
      </div>
            </div>
            
            <div className="bg-white p-4 rounded-md shadow-md m-4">
    <div className="flex items-center">
      <h2 className="text-blue-800 px-2 py-2">
     Self Development & Learning
      </h2>
      <span className=" bg-blue-200 font-semibold rounded-md text-blue-700">35</span>
    </div>
                    <p className='tracking-tight py-2'>​It reflects your performance on the various Projects(one/ multiple) you have worked on in the First Half of Year 2023.
            <br/>It is all about managing work expectations.<br/>
            It covers criteria like the quality of delivery, delivery deadlines, no. of defects, etc.- all related to the project/ assignment you are expected to be working on.<br/>
            You should mention the name of the project/s you have worked on in the Year 2023 with your Job Title and achievements in the project.</p>
            <div>
      <button
        onClick={toggleDropdown}
        className="  w-full text-left px-4 py-2 rounded border-solid border-2   "
      > Dropdown</button>
      {isOpen && (
        <div className="absolute  bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Item 3
          </a>
        </div>
      )}
    </div>
    <div className=" mt-8">
        <div className="w-1/2 mr-4">
          <p className="text-gray-600 mb-2">Self Rating</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none">
            <option value="select">Select</option>
          </select>
        </div>
        <div className="w-full mr-4">
          <p className="text-gray-600 mb-2">Technical Skills realted Training need</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none">
            <option value="select">Select</option>
          </select>
        </div>
        <div className="w-full mr-4">
          <p className="text-gray-600 mb-2">Behavioral/ Soft Skill Training Need</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none">
            <option value="select">Select</option>
          </select>
        </div>
      </div>
            </div>
    <div className="bottom-0 left-0 right-0 bg-white py-4 px-6 flex justify-end items-center ">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2 "
          onClick={handleDraft}
        >
          Save as Draft
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </div>
       
</>
  );
}; 
  

export default MyAppraisalForm
